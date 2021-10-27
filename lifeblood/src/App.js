import React,{Component} from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./Components/AboutUsPage/AboutUs";
import {Route,Switch,withRouter} from 'react-router-dom';
import MainSection from "./Components/HomePage/MainSection";
import Navbar from "./Components/temp/jeetu";
import Login1 from './Components/Authentication/login1';
import CreateAccount from './Components/Authentication/CreateAccount';
import ErrorHandler from './Components/ErrorHandler/ErrorHandler';
//import './Components/Authentication/login.css';
import AccountVerification from "./Components/Verification/Verification";
import DisplayModal from "./Components/DisplayModal/DisplayModal";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
import NewRequest from "./Components/NewRequest/NewRequest";
import Feed from "./Components/Feed/Feed";
import Updatepassword from "./Updatepassword/Updatepassword";
import ChatModal from "./Components/ChatModal/ChatModal";
import MapPage from "./Components/MapPage/MapPage";
import DetailsForm from "./Components/DetailsForm/DetailsForm";
import DOUWantTOConnectModal from "./Components/DoUWantToConnectModal/DOUWantToConnectModal";
class App extends Component {
  state={
    isAuth:false,
    userId:null,
    userName:"",
    error:null,
    hasError:false,
    socket:null,
    googleLogin:false,
    googleLoginCount:0
  }
  componentDidMount(){
    const token = localStorage.getItem("token");
    const expiaryDate = localStorage.getItem("expiryDate");
    const google = localStorage.getItem("google");
    
    if(!token || !expiaryDate)
    {
      return;
    }
    if (new Date()>=new Date(expiaryDate))
    {
      this.logoutHandler();
      return;
    }
    if(google===1)
    {
      this.setState({googleLoginCount:1})
    }
    console.log(token,this.state.googleLoginCount);
    const userId = localStorage.getItem("userId");
    const userName = localStorage.getItem("userName");
    
    this.setState({isAuth:true,userId:userId,userName:userName});
   
    const remainingMilliseconds = 
    new Date(expiaryDate).getTime()-new Date().getTime();
    this.setAutoLogout(remainingMilliseconds);

  }
  loginHandler = (event,data)=>{
    event.preventDefault();
    fetch('http://localhost:4000/api/login',{
      method:'POST',
      headers:{
        "content-Type":"application/json",
      },
      body:JSON.stringify({
        email:data.email,
        password:data.password
      }),
    })
    .then((res)=>{
      console.log(res);
      if (res.status===422)
      {
        throw new Error("Validation Error");
      }
      if(res.status!==200 )
      {
        throw new Error("Could not authenticate You");
      }
      return res.json();
    })
    .then(resData=>{
        this.setState({
          isAuth:true,
          userId:resData.userId,
          userName:resData.userName});
        localStorage.setItem("userId",resData.userId);
        localStorage.setItem("userName",resData.userName);
        localStorage.setItem("token",resData.token);
        
        this.props.history.push("/");
        const remainingMilliseconds = 60*60*1000;
        const expiryDate = new Date(
          new Date().getTime()+remainingMilliseconds
        );
        localStorage.setItem("expiryDate",expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
        
    })
    .catch(err=>{
      console.log(err);
      this.setState({isAuth:false,error:err});
    })

  }
  googleLoginHandler = (event,token)=>{
    fetch("http://localhost:4000/api/auth/google", {
	      method: "POST",
	      body: JSON.stringify({
	      token: token
	    }),
	    headers: {
	      "Content-Type": "application/json"
	    }
	  })
    .then(res=>{
      if(res.status===422)
      {
        throw new Error("Error Occured")
      }
      return res.json()
    })
    .then(resData=>{
      this.setState({isAuth:true,
        googleLogin:true,
        userId:resData.userId,
        userName:resData.userName
      })
      if(resData.first_time)
      {
        
      this.setState({googleLoginCount:1})
      }
      
      localStorage.setItem("google",1);
      localStorage.setItem("googleLoginCount",1);  
      localStorage.setItem("userName",resData.userName);
      localStorage.setItem("userId",resData.userId);
      localStorage.setItem("email",resData.email);
      localStorage.setItem("token",resData.token);
      this.props.history.push("/");
        const remainingMilliseconds = 60*60*1000;
        const expiryDate = new Date(
          new Date().getTime()+remainingMilliseconds
        );
        localStorage.setItem("expiryDate",expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
        
    })
    .catch(err=>{
      console.log(err);
      this.setState({isAuth:false,error:err});
    })
    
	  
  }
  logoutHandler = ()=>{
      this.setState({isAuth:false,userId:null,userName:'',googleLogin:false,googleLoginCount:0})
      localStorage.removeItem("userName");
      localStorage.removeItem("userId");
      localStorage.removeItem("expiaryDate");
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("googleLoginCount")

  }
  setAutoLogout = (ms)=>{
    setTimeout(()=>{
        this.logoutHandler()
    },ms);
  }
  signUpHandler = (event,data)=>{
    event.preventDefault();
    if(data.pincode==='' || data.name==='' || data.phone==='' || data.email==='' || data.password==='' || data.confirmPassword==='' || data.bloodGrp==='')
    {
        this.setState({error:{message:"Plz enter all values properly"},isAuth:false})
        return;
    }
    if(data.password!==data.confirmPassword)
    {
      this.setState({error:{message:"confirmPassword must match password"},isAuth:false});
      return;
    }
    fetch("http://localhost:4000/api/signup",{
      method:"POST",
      headers:{
        "content-Type":"application/json",
      },
      body:JSON.stringify({
        email:data.email,
        name:data.name,
        pincode:data.pincode,
        password:data.password,
        confirmPassword:data.password,
        bloodGrp:data.bloodGrp,
        phoneNumber:data.phone
      })
    })
    .then(res=>{
      if(res.status===422){
        throw new Error("Validation Failed, Make Sure Email is not used Yet");
      }
      if(res.status!==201)
      {
        throw new Error("Validation Failed, Make Sure Email is not used Yet");
      }
      return res.json();
    })
    .then(resData=>{
      this.setState({isAuth:false});
      console.log(resData);
      localStorage.setItem("email",resData.email);
      this.props.history.push('/verify');

    })
    .catch(err=>{
      this.setState({hasError:true,error:err})
    })
  }
  DetailsFormHandler = (event,Data)=>{
    event.preventDefault();

    fetch("http://localhost:4000/api/DetailsForm",{
            method:"POST",
            headers:{
                "content-Type":"application-json",
            },
            body:JSON.stringify({
                age:Data.age,
                bloodGrp:Data.bloodGrp,
                pincode:Data.pincode,
                phone:Data.phone,
                userId:localStorage.getItem("userId")
            })
        })
        .then(res=>{
            if (res.status!==200)
            {
                throw new Error("User already exists");
            }
            return res.json();
        })
        .then(resData=>{
            this.setState({googleLoginCount:0})
        })
        .catch(err=>{
            console.log(err);
        })
  }
  updatePasswordHandler = (event,data,token)=>{
       event.preventDefault();
       fetch("http://localhost:4000/api/resetpassword/updatepassword",{
         method:"POST",
         headers:{
           'Content-Type':"application/json"
         },
         body:JSON.stringify({
           token:token,
           password:data.password
         })
       })
       .then((res)=>{
         if(res.status===422)
         {
           throw new Error("Validation Falied !");
         }
         return res.json();
       })
       .then(resData=>{
          this.props.history.replace("/login");
       })
       .catch(err=>{
         console.log(err);
         this.setState({error:err,isAuth:false})
       })
  }
  errorHandle = ()=>{
    this.setState({hasError:false,error:null})
  }
  render(){
    let routes = (
      <Switch>
         
          <Route path="/home" exact>
            <MainSection />
          </Route>
          <Route path="/login" exact>
              <Login1 onLogin = {this.loginHandler} googleHandler = {this.googleLoginHandler} />
          </Route>
          <Route path="/signup" exact render = {props=>(<CreateAccount onSignup = {this.signUpHandler} googleHandler={this.googleLoginHandler}/>)}/>
          <Route path="/" exact>
            <MainSection />
          </Route>
          <Route path="/verify" exact render = {props=>(
            <AccountVerification/>
          )}/>
         <Route path="/resetPassword" exact render = {props=>(
           <ResetPassword/>
         )}/>
         <Route path='/nearby'>
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/reset/:token"  render = {
            (props)=>(<Updatepassword onReset = {this.updatePasswordHandler}/>)
          }/>
          <Route path="/chat" component={ChatModal}/>
          <Route path='/request'>
            <NewRequest />
          </Route>
          <Route path="/feed">
            <Feed/>
          </Route>
      </Switch>
    );
    if(this.state.isAuth){
      routes=(
        <Switch>
            <Route path="/home" exact>
              <MainSection />
            </Route>
            <Route path="/" exact>
              <MainSection />
            </Route>
           <Route path="/resetPassword" exact render = {props=>(
             <ResetPassword/>
           )}/>
           <Route path='/nearby'>
             <MapPage/>
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>

            <Route path='/request'>
              <NewRequest />
            </Route>
            <Route path="/feed">
              <Feed/>
            </Route>
        </Switch>
      );
    }
  return (
    <React.Fragment>
        <Navbar isAuth = {this.state.isAuth} onLogout = {this.logoutHandler} socket = {this.state.socket}/>
        {routes}
        {this.state.googleLogin && this.state.googleLoginCount===1 && <DisplayModal Details = {this.DetailsFormHandler}/>}
       
        <ErrorHandler error={this.state.error} onHandle={this.errorHandle}/>
    </React.Fragment>
  );
 
}
}
export default withRouter(App);
// 
// <DOUWantTOConnectModal/>
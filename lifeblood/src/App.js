import React,{Component} from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from "./Components/AboutUsPage/AboutUs";
import {Route,Switch,withRouter} from 'react-router-dom';
import MainSection from "./Components/HomePage/MainSection";
import Navbar from "./Components/temp/jeetu";
import Login1 from './Components/Authentication/login1';
import CreateAccount from './Components/Authentication/CreateAccount';
import ErrorHandler from './Components/ErrorHandler/ErrorHandler';
import './Components/Authentication/login.css';
import AccountVerification from "./Components/Verification/Verification";
import DisplayModal from "./Components/DisplayModal/DisplayModal";
import ResetPassword from "./Components/ResetPassword/ResetPassword";
//import DetailsForm from "./Components/DetailsForm/DetailsForm";
class App extends Component {
  state={
    isAuth:false,
    userId:null,
    userName:"",
    hasError:false
  }
  componentDidMount(){
    const token = localStorage.getItem("token");
    const expiaryDate = localStorage.getItem("expiryDate");
    console.log(token, expiaryDate);
    if(!token || !expiaryDate)
    {
      return;
    }
    if (new Date()>=new Date(expiaryDate))
    {
      this.logoutHandler();
      return;
    }
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
    })

  }
  logoutHandler = ()=>{
      this.setState({isAuth:false,userId:null,userName:''})
      localStorage.removeItem("userName");
      localStorage.removeItem("userId");
      localStorage.removeItem("expiaryDate");
      localStorage.removeItem("token");


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
        //setHasError(true);
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
        throw new Error("Failed");
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
      this.setState({hasError:true})
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
                phone:Data.phone
            })
        })
        .then(res=>{
            if (res.status!==200)
            {
                throw new Error("Failed");
            }
            return res.json();
        })
        .then(resData=>{
            console.log(resData);
        })
        .catch(err=>{
            console.log(err);
        })
  }
  errorHandle = ()=>{
    this.setState({hasError:false})
  }
  render(){
    let routes = (
      <Switch>
         
          <Route path="/home" exact>
            <MainSection />
          </Route>
          <Route path="/login" exact>
              <Login1 onLogin = {this.loginHandler}/>
          </Route>
          <Route path="/signup" exact render = {props=>(<CreateAccount onSignup = {this.signUpHandler}/>)}/>
          <Route path="/" exact>
            <MainSection />
          </Route>
          <Route path="/verify" exact render = {props=>(
            <AccountVerification/>
          )}/>
         <Route path="/resetPassword" exact render = {props=>(
           <ResetPassword/>
         )}/>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route></Route>
          <Route></Route>
      </Switch>
    );
  return (
    <React.Fragment>
        <Navbar isAuth = {this.state.isAuth} onLogout = {this.logoutHandler}/>
        {routes}
        
        <ErrorHandler error={this.state.hasError} onHandle={this.errorHandle}/>
    </React.Fragment>
  );
}
}
//<DisplayModal Details = {this.DetailsFormHandler}/>
export default withRouter(App);

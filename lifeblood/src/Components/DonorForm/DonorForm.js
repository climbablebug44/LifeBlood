import React,{useState} from "react";
import styles from './DonorForm.module.css';

const DonorForm = props => {
    const [age,setAge] = useState(null)
    const [weight,setWeight] = useState(null);
    const [radio,setRadio] = useState(null);
    const [checkBox,setCheckBox] = useState([]);
    const [tattoo,setTattoo] = useState(null);
    const [hemoglobin,setHemoglobin] = useState(null);
    const [sexual,setSexual] = useState(null);
    const [std,setStd] = useState(null);
    const [hiv,setHiv] = useState(null);
    const [drugs,setDrugs] = useState(null);
    const [pregnant,setPregnant] = useState(null);
    const [medicine,setMedicine] = useState([]);
    const ageChangeHandler = (event)=>{
        setAge(event.target.value);
    } 
    const weightChangeHandler = (event)=>{
        setWeight(event.target.value)
    } 
    const radioChangeHandler = (event)=>{
        setRadio(event.target.value)
        console.log(event.target.value);
    }
    const checkBoxHandler = (event)=>{
        setCheckBox([...checkBox,event.target.value]);
        console.log("check->", ...checkBox);
    }
    const tattooHandler = (event)=>{
        setTattoo(event.target.value);
    }
    const hemoglobinHandler = (event)=>{
        setHemoglobin(event.target.value);
    }
    const sexualHandler = (event)=>{
        setSexual(event.target.value);
    }
    const hivHandler = (event)=>{
        setHiv(event.target.value);
    }
    const stdHandler = (event)=>{
        setStd(event.target.value);
    }
    const drugsHandler = (event)=>{
        setDrugs(event.target.value);
    }
    const pregnantHandler=(event)=>{
        setPregnant(event.target.value);
    }
    const medicineHandler=(event)=>{
        setMedicine([...medicine,event.target.value]);
    }
    const formSubmitHandler = (event)=>{
        event.preventDefault();
        const userId = localStorage.getItem("userId")
        fetch('http://localhost:4000/api/donorform',{
            method:"POST",
            "content-Type":"application-json",
            body:JSON.stringify({
                age:age,
                weight,
                radio,
                checkBox,
                tattoo,
                hemoglobin,
                sexual,
                std,
                hiv,
                drugs,
                pregnant,
                medicine,
                userId

            })
        })
        .then(res=>{
            if(res.status!==201)
            {
                throw new Error("error");
            }
            return res.json();
        })
        .then(data=>{

        })
        .catch(err=>{
            console.log(err);
        })
    }
    return <div className={styles.container}>
        <form className={styles.form} onSubmit={formSubmitHandler}>
            <div className={styles['input-text']}>
                <label htmlFor='age'>What is your age?</label>
                <input name='age' id='age' type='number' required min='18' value={age} max='65' onChange={ageChangeHandler} />
            </div>
            <div className={styles['input-text']}>
                <label htmlFor='age'>What is your weight?</label>
                <input name='weight' id='weight' type='number' value={weight} onChange={weightChangeHandler} required min='50' />
            </div>
            <div className={styles['input-radio']}>
                <p>Are you in good health right now?</p>
                <div className={styles['radio-buttons']}>
                    <input type='radio' id='yes' name='goodHealth' value='yes' required onClick={radioChangeHandler} ></input><label htmlFor='yes'>Yes</label>
                    <input type='radio' id='no' name='goodHealth' value='no' onClick={radioChangeHandler} ></input><label htmlFor='no'>No</label>
                </div>
            </div>
            <div className={styles['input-checkbox']}>
                <p>Are you suffering from any of these?</p>

                <div className={styles.checkboxes}>
                    <input type="checkbox" id="cold" name="cold" value="cold" onClick={checkBoxHandler}/>
                    <label htmlFor='cold'>Cold</label>
                </div>

                <div className={styles.checkboxes}>
                    <input type="checkbox" id="flu" name="flu" value="flu" onClick={checkBoxHandler}/>
                    <label htmlFor='flu'>flu</label>
                </div>

                <div className={styles.checkboxes}>
                    <input type="checkbox" id="soreThroat" name="soreThroat" value="soreThroat" onClick={checkBoxHandler}/>
                    <label htmlFor='soreThroat'>sore throat</label>
                </div>

                <div className={styles.checkboxes}>
                    <input type="checkbox" id="coldSore" name="coldSore" value="coldSore" onClick={checkBoxHandler} />
                    <label htmlFor='coldSore'>cold sore</label>
                </div>

                <div className={styles.checkboxes}>
                    <input type="checkbox" id="stomachBug" name="stomachBug" value="stomachBug" onClick={checkBoxHandler}/>
                    <label htmlFor='stomachBug'>stomach bug</label>
                </div>

                <div className={styles.checkboxes}>
                    <input type="checkbox" id="notSuffering" name="notSuffering" value="notSuffering" onClick={checkBoxHandler} />
                    <label htmlFor='notSuffering'>Not suffering from any of these</label>
                </div>
            </div>
            <div className={styles['input-checkbox']}>

            </div>
            <div className={styles['input-radio']}>
                <p>Do you have a tattoo or body pierced in past 6 months?</p>
                <div className={styles['radio-buttons']}>
                    <input type='radio' id='yes' name='tattoo' value='yes' onClick={tattooHandler} required ></input><label htmlFor='yes'>Yes</label>
                    <input type='radio' id='no' name='tattoo' value='no' onClick={tattooHandler} ></input><label htmlFor='no'>No</label>
                </div>
            </div>

            <div className={styles['input-radio']}>
                <p className={styles.special}>Is Your Current Hemoglobin level is higher than 13(for Male Donor) 12(for Female Donor) ?</p>

                <h5><span>Note : </span>A test will be administrator at the time of donation</h5>
                <div className={styles['radio-buttons']}>
                    <input type='radio' id='yes' name='hemoglobin' value='yes' required onClick={hemoglobinHandler}></input><label htmlFor='yes' >Yes</label>
                    <input type='radio' id='no' name='hemoglobin' value='no'onClick={hemoglobinHandler} ></input><label htmlFor='no' >No</label>
                    <input type='radio' id='noIdea' name='hemoglobin' value='noIdea' onClick={hemoglobinHandler} ></input><label htmlFor='noIdea' >Not Aware</label>
                </div>
            </div>

            <div className={styles['input-radio']}>
                <p className={styles.special}>Have you engaged in any “at risk” sexual activity in past 12 months?</p>
                <div className={styles['radio-buttons']}>
                    <input type='radio' id='yes' name='sexualRisk' value='yes' required onClick={sexualHandler}></input><label htmlFor='yes' >Yes</label>
                    <input type='radio' id='no' name='sexualRisk' value='no' onClick={sexualHandler}></input><label htmlFor='no' >No</label>
                </div>
            </div>
            <div className={styles['input-radio']}>
                <p>Have you ever tested positive for HIV?</p>
                <div className={styles['radio-buttons']}>
                    <input type='radio' id='yes' name='everHIV' value='yes' required ></input><label htmlFor='yes' onClick={hivHandler}>Yes</label>
                    <input type='radio' id='no' name='everHIV' value='no' ></input><label htmlFor='no' onClick={hivHandler}>No</label>
                </div>
            </div>
            <div className={styles['input-radio']}>
                <p className={styles.special}>Have you been ever diagnosed for any other Sexually transmitted disease (STDs)?
                </p>
                <div className={styles['radio-buttons']}>
                    <input type='radio' id='yes' name='STDDiagnosed' value='yes' required onClick = {stdHandler}></input><label htmlFor='yes' >Yes</label>
                    <input type='radio' id='no' name='STDDiagnosed' value='no' onClick={stdHandler}></input><label htmlFor='no' >No</label>
                </div>
            </div>

            <div className={styles['input-radio']}>
                <p>Have you ever injected recreation drugs?
                </p>
                <div className={styles['radio-buttons']}>
                    <input type='radio' id='yes' name='drugs' value='yes' required onClick={drugsHandler}></input><label >Yes</label>
                    <input type='radio' id='no' name='drugs' value='no' onClick={drugsHandler}></input><label htmlFor='no'>No</label>
                </div>
            </div>
            <div className={styles['input-radio']}>
                <p>Are you pregnant or still breast-feeding you child?
                </p>
                <h5><span>Note : </span>Only Applicable for female Donor</h5>
                <div className={styles['radio-buttons']}>
                    <input type='radio' id='yes' name='pregnant' value='yes' onClick={pregnantHandler}></input><label htmlFor='yes'>Yes</label>
                    <input type='radio' id='no' name='pregnant' value='no' onClick={pregnantHandler}></input><label htmlFor='no'>No</label>
                </div>
            </div>

            <div className={styles['input-checkbox']}>
                <p> Are you currently on any of these medications?</p>
                <h5><span>Note : </span>You don't have to select anything if you are not taking any of these medications</h5>

                <div className={styles.checkboxes}>
                    <input type="checkbox" id="Aspirin" name="Aspirin" onClick={medicineHandler}/>
                    <label htmlFor='Aspirin'>Aspirin</label>
                </div>

                <div className={styles.checkboxes}>
                    <input type="checkbox" id="Antibiotics" name="Antibiotics" onClick={medicineHandler}/>
                    <label htmlFor='Antibiotics'>Antibiotics</label>
                </div>

                <div className={styles.checkboxes}>
                    <input type="checkbox" id="Birth Control" name="Birth Control" onClick={medicineHandler}/>
                    <label htmlFor='Birth Control'>Birth Control</label>
                </div>

                <div className={styles.checkboxes}>
                    <input type="checkbox" id="Immunization" name="Immunization"onClick={medicineHandler} />
                    <label htmlFor='Immunization'>Immunization</label>
                </div>

                <div className={styles.checkboxes}>
                    <input type="checkbox" id="Vaccine" name="Vaccine" onClick={medicineHandler} />
                    <label htmlFor='Vaccine'>Vaccine</label>
                </div>

                <div className={styles.checkboxes}>
                    <input type="checkbox" id="Insulin" name="Insulin" onClick={medicineHandler}/>
                    <label htmlFor='Insulin'>Insulin</label>
                </div>
            </div>

            <div className={styles.buttons}>
                <button type='reset' className={styles.reset}>Reset</button>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </div>

}

export default DonorForm;
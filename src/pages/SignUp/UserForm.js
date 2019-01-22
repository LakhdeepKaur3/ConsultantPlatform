import React, {
    Component
}
from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import ConfirmPlan from "./ConfirmPlan";
import Success from "./Success";
import Payment from "./payment"
import axios from 'axios';
import $ from 'jquery'
export class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            arr:[],
            arrv:[],
            vid:[],
            isLoading: false,
            file: '',
            files: '',
            roles: 'consultant',
            selectedFile: null,
            selectedFiles: [],
            selectedVideo: [],
            imagePreviewUrl: '',
            videoPreviewUrl: [],
            imagePreviewUrls: [],
            pictures: [],
            videos: [],
            planType: '',
            planAmount: '',
            planSchedule: 'month',
            status: false,
            about: '',
            categoryError: '',
            companyname: '',
            companyaddress: '',
            region: '',
            city: '',
            firstName: "",
            lastName: "",
            contact: '',
            email: "",
            password: '',
            confirmpassword: '',
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            passwordError: '',
            confirmpasswordError: '',
            contactError: '',
            addMore: '',
            category: '',
            categoryList: [{
                label: 'Category',
                value: 0
            }, {
                label: 'Developer',
                value: 'Developer'
            }, {
                label: 'Junior Developer',
                value: 'Junior Developer'
            }, {
                label: 'Senior Developer',
                value: 'Senior Developer'
            }],

            skillList: [{
                label: 'Category',
                value: 0
            }, {
                label: 'Skill1',
                value: 'skill1'
            }, {
                label: 'Skill2',
                value: 'Skill2'
            }, {
                label: 'Skill3',
                value: 'Skill3'
            }],
            skills: '',
            qualification: [''],
            experience: [{
                title: '',
                company: '',
                location: '',
                dateFrom: '',
                dateTo: ''
            }]
        };
    }
    alldata = () => {
        console.log("Data Submited")
    }
    removeimage=(index)=>{
        
         const {imagePreviewUrls,selectedFiles} = this.state
        imagePreviewUrls.splice(index,1);
        this.setState({imagePreviewUrls:imagePreviewUrls})
        selectedFiles.splice(index,1);
        this.setState({selectedFiles:selectedFiles})        
    }
    removevideo=(index)=>{
        
         const {videoPreviewUrl,selectedVideo} = this.state
        videoPreviewUrl.splice(index,1);
        this.setState({videoPreviewUrl:videoPreviewUrl})
        selectedVideo.splice(index,1);
        this.setState({selectedVideo:selectedVideo})        
    }
    ocShowAlert = (message, background = '#3089cf') => {
        let alertContainer = document.querySelector('#oc-alert-container'),
            alertEl = document.createElement('div'),
            textNode = document.createTextNode(message);
        alertEl.setAttribute('class', 'oc-alert-pop-up');
        $(alertEl).css('background', background);
        //   alertEl.appendChild( textNode );
        //  alertContainer.appendChild( alertEl );
        setTimeout(function() {
            $(alertEl).fadeOut('slow');
            $(alertEl).remove();
        }, 3000);
    };
    singleFileChangedHandler = (event) => {
        if(event.target.files[0].size<10000000000){
        let reader = new FileReader();
        let file = event.target.files[0];
        
        this.setState({
            selectedFile: event.target.files[0],

        });
        console.log(event.target.files[0].size)
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)

    }
    else{
    alert("File size too large")
}}
    
    multipleFileChangedHandler = (event) => {
        //console.log(event.target.)
        const {imagePreviewUrls, selectedFiles} = this.state;
        Object.keys(event.target.files).forEach(key => {
            console.log(':: arr length ',imagePreviewUrls.length)
            if(imagePreviewUrls.length<4 && selectedFiles.length<4) {
                console.log(':: inside if')
                let reader = new FileReader();
                    let file = event.target.files[key];
                    selectedFiles.push(file);
                    //console.log("file is sfsdgr",file.size)
                    reader.onloadend = () => {
                        imagePreviewUrls.push(reader.result);
                        console.log(':: imagePreviewUrls ',imagePreviewUrls)
                        this.setState({
                            selectedFiles,
                            imagePreviewUrls,
                        });
                    }
                    if (file) {
                        reader.readAsDataURL(file)
                    }


            }
            else{
                alert("max is 4")
            }
        })
}

    singleVideoChangedHandler = (event) => {
        const {videoPreviewUrl, selectedVideo} = this.state;
        Object.keys(event.target.files).forEach(key => {
            console.log(':: arr length ',videoPreviewUrl.length)
            if(videoPreviewUrl.length<2 && selectedVideo.length<2) {
                console.log(':: inside if')
                let reader = new FileReader();
                    let file = event.target.files[key];
                    selectedVideo.push(file);
                    //console.log("file is sfsdgr",file.size)
                    reader.onloadend = () => {
                        videoPreviewUrl.push(reader.result);
                        console.log(':: videopreviewurl ',videoPreviewUrl)
                        this.setState({
                            selectedVideo,
                            videoPreviewUrl,
                        });
                    }
                    if (file) {
                        reader.readAsDataURL(file)
                    }


            }
            else{
                alert("max is 2")
            }
        })
   
    }
    singleFileUploadHandler = (event) => {

        event.preventDefault();
        if (this.state.selectedFile) {
            this.setState({
                isLoading: true
            })
            const data = new FormData();
            // If file selected
            if (this.state.selectedFile) {
                data.append('basic', this.state.selectedFile, this.state.selectedFile.name, this.state.selectedFile.lastModifiedDate);
                axios.post('http://backendul.n1.iworklab.com:3202/api/auth/upload/images ', data, {
                        headers: {
                            'accept': 'application/json',
                            'Accept-Language': 'en-US,en;q=0.8',
                            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                        }
                    })
                    .then((response) => {
                        if (200 === response.status) {
                            // If file size is larger than expected.
                            if (response.data.error) {
                                if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                                    this.ocShowAlert('Max size: 2MB', 'red');
                                } else {
                                    console.log(response.data);
                                    console.log("imagedata", response.data.success[0].fileName)
                                    this.setState({
                                            pictures: response.data.success[0],
                                            isLoading: false
                                        })
                                        // If not the given file type
                                    this.ocShowAlert(response.data.error, 'red');
                                }
                            } else {
                                // Success
                                let fileName = response.data;
                                console.log('filedata', fileName);
                                this.ocShowAlert('File Uploaded', '#3089cf');

                            }
                        }
                    }).catch((error) => {
                        // If another error
                        this.ocShowAlert(error, 'red');
                    });
            } else {
                // if file not selected throw error
                this.ocShowAlert('Please upload file', 'red');
            }
        } else {
            alert("please choose file")
        }
    };


    singleVideoUploadHandler = (event) => {
          event.preventDefault();
            this.setState({
                isLoading: true
            })
            const data = new FormData();
            let selectedVideo = this.state.selectedVideo;
            // If file selected
            if (selectedVideo) {
                for (let i = 0; i < selectedVideo.length; i++) {
                    data.append('pro', selectedVideo[i], selectedVideo[i].name);
                }
                axios.post('http://backendul.n1.iworklab.com:3202/api/auth/upload/videos', data, {
                        headers: {
                            'accept': 'application/json',
                            'Accept-Language': 'en-US,en;q=0.8',
                            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                        }
                    })
                    .then((response) => {
                        console.log('res', response.data.success);
                        this.setState({ 
                            videos: response.data.success,
                            isLoading: false
                        })
                        if (200 === response.status) {
                            // If file size is larger than expected.
                            if (response.data.error) {
                                if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                                    this.ocShowAlert('Max size: 2MB', 'red');
                                } else if ('LIMIT_UNEXPECTED_FILE' === response.data.error.code) {
                                    this.ocShowAlert('Max 4 images allowed', 'red');
                                } else {
                                    // If not the given ile type
                                    this.ocShowAlert(response.data.error, 'red');
                                }
                            } else {
                                // Success
                                let fileName = response.data;
                                console.log('fileName', fileName);
                                this.ocShowAlert('File Uploaded', '#3089cf');
                            }
                        }
                    }).catch((error) => {
                        // If another error
                        this.ocShowAlert(error, 'red');
                    });
            } else {
                // if file not selected throw error
                this.ocShowAlert('Please upload file', 'red');
            }
        
    };

    multipleFileUploadHandler = (event) => {
        event.preventDefault();
            this.setState({
                isLoading: true
            })
            const data = new FormData();
            let selectedFiles = this.state.selectedFiles;
            console.log(selectedFiles)
            // If file selected
            if (selectedFiles) {
                for (let i = 0; i < selectedFiles.length; i++) {
                   data.append('pro', selectedFiles[i]);
                    console.log(data)
                }
                axios.post('http://backendul.n1.iworklab.com:3202/api/auth/upload/images', data, {
                        headers: {
                            'accept': 'application/json',
                            'Accept-Language': 'en-US,en;q=0.8',
                            'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                        }
                    })
                    .then((response) => {
                        console.log('res', response.data.success);
                        this.setState({
                            pictures: response.data.success,
                            isLoading: false
                        })
                        if (200 === response.status) {
                            // If file size is larger than expected.
                            if (response.data.error) {
                                if ('LIMIT_FILE_SIZE' === response.data.error.code) {
                                    this.ocShowAlert('Max size: 2MB', 'red');
                                } else if ('LIMIT_UNEXPECTED_FILE' === response.data.error.code) {
                                    this.ocShowAlert('Max 4 images allowed', 'red');
                                } else {
                                    // If not the given ile type
                                    this.ocShowAlert(response.data.error, 'red');
                                }
                            } else {
                                // Success
                                let fileName = response.data;
                                console.log('fileName', fileName);
                                this.ocShowAlert('File Uploaded', '#3089cf');
                            }
                        }
                    }).catch((error) => {
                        // If another error
                        this.ocShowAlert(error, 'red');
                    });
            
        } else {
            alert("please select Image")
        }
        debugger;
    };
    validate = () => {

        let isError = false;
        const errors = {
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            passwordError: "",
            confirmpasswordError: "",
            contactError: ''
        };

        if (this.state.firstName.length < 1) {
            isError = true;
            errors.firstNameError = "FirstName is required";
        }


        if (this.state.lastName.length < 1) {
            isError = true;
            errors.lastNameError = "LastName is required";
        }
        if (this.state.password.length < 5) {
            isError = true;
            errors.passwordError = "Password must of of atleast 5 number";
        }

        if (this.state.password != this.state.confirmpassword) {

            isError = true;
            errors.confirmpasswordError = "password is not match"

        }
        if (this.state.contact.length < 10) {

            isError = true;
            errors.contactError = "Phone number must be of 10 digits"

        }
        if (this.state.email.indexOf("@") === -1 || this.state.email.indexOf(".") === -1) {
            isError = true;
            errors.emailError = "Requires valid email with @ and .";
        }


        this.setState({
            ...this.state,
                ...errors
        });

        return isError;

    };


    // Proceed to next step
    nextStep = () => {
        const err = this.validate();
        if (!err) {
            const {
                step
            } = this.state;
            this.setState({
                step: step + 1
            });

        }
    };

    // Go back to prev step
    prevStep = () => {
        const {
            step
        } = this.state;
        this.setState({
            step: step - 1
        });
    };
    // Handle fields change
    handleChange = input => e => {


        this.setState({
            [input]: e.target.value
        });

    };

    add = () => {


        this.setState({
            qualification: [...this.state.qualification, ""]
        })

    }
    changing = (e, index) => {
        this.state.qualification[index] = e.target.value
        console.log('asdasdasdasd', this.state.qualification[0])
        if (index >= 0) {
            this.setState({
                qualification: this.state.qualification.filter(Boolean)
            })

            if (this.state.qualification[0] === '') {
                this.setState({
                    qualification: ['']
                })
            }
        }
    }
    changingmore = (value, index, type) => {
        this.state.experience[index][type] = value

    }
    addmore = () => {
        this.setState((prevState) => ({
            experience: [...prevState.experience, {
                title: "",
                company: "",
                location: "",
                datefrom: '',
                dateto: ''
            }],
        }));

    }
    changeplantobasic = () => {

        this.setState({
            status: true
        })
        this.setState({
            planType: 'basic'
        })
        if(this.state.planSchedule=="month")
        {this.setState({
            planAmount: '$90'
        })
        }
        else{
            {this.setState({
            planAmount: '$1000'
        })
        }
    }
        // this.setState({
        //     planSchedule: 'month'
        // })

        const {
            step
        } = this.state;
        this.setState({
            step: step + 1
        });
        //alert("Click Submit button ")

    }
    changeplantopro = () => {

        this.setState({
            status: true
        })
        this.setState({
            planType: 'pro'
        })
        if(this.state.planSchedule=="month")
        {this.setState({
            planAmount: '$90'
        })
        }
        else{
            {this.setState({
            planAmount: '$1000'
        })
        }
    }
        // this.setState({
        //     planSchedule: 'yearly'
        // })
        const {
            step
        } = this.state;
        this.setState({
            step: step + 1
        });


    }

    _handleSubmit = (e) => {
        e.preventDefault();
        // TODO: do something with -> this.state.file

    }
    render() {
        console.log("schelule",this.state.planSchedule)
        
        const {
            step
        } = this.state;

        const {
            companyname,
            companyaddress,
            region,
            city,
            firstName,
            lastName,
            contact,
            email,
            password,
            confirmpassword,
            qualification,
            experience,
            about,
            role,
            planType,
            category,
            categoryList,
            skills,
            skillList,
            roles,
            rolesList,
            status,
            planAmount,
            planSchedule,
            selectedFile,
            selectedVideo,
            imagedata,
            videos,
            pictures,
            imagePreviewUrl,
            imagePreviewUrls,
            videoPreviewUrl,
            isLoading

        } = this.state;
        const values = {
            companyname,
            companyaddress,
            region,
            city,
            firstName,
            lastName,
            contact,
            email,
            password,
            confirmpassword,
            qualification,
            experience,
            about,
            planType,
            category,
            skills,
            roles,
            status,
            planAmount,
            planSchedule,
            imagedata,
            pictures,
            videos,

        };
        const {
            categoryError, firstNameError, lastNameError, emailError, passwordError, confirmpasswordError, contactError

        } = this.state
        const errors = {
            categoryError, firstNameError, lastNameError, emailError, passwordError, confirmpasswordError, contactError
        }

        switch (step) {
            case 1:
                return ( <
                    FormUserDetails nextStep = {
                        this.nextStep
                    }
                    handleChange = {
                        this.handleChange
                    }
                    values = {
                        values
                    }
                    errorName = {
                        errors
                    }

                    continues = {
                        this.nextStep
                    }
                    rolesList = {
                        rolesList
                    }

                    />
                );
            case 2:
                return ( <
                    FormPersonalDetails nextStep = {
                        this.nextStep
                    }
                    prevStep = {
                        this.prevStep
                    }
                    handleChange = {
                        this.handleChange
                    }
                    values = {
                        values
                    }
                    changing = {
                        this.changing
                    }
                    add = {
                        this.add
                    }
                    addmore = {
                        this.addmore
                    }
                    changingmore = {
                        this.changingmore
                    }
                    categoryList = {
                        categoryList
                    }
                    skillList = {
                        skillList
                    }
                    errorName = {
                        errors
                    }

                    />
                );
            case 3:
                return ( <
                    ConfirmPlan nextStep = {
                        this.nextStep
                    }
                    prevStep = {
                        this.prevStep
                    }
                    values = {
                        values
                    }
                    changeplantobasic = {
                        this.changeplantobasic
                    }
                    changeplantopro = {
                        this.changeplantopro
                    }
                    history = {
                        this.props.history
                    }
                    />
                );
                case 4:
                return ( <
                    Payment nextStep = {
                        this.nextStep
                    }
                    prevStep = {
                        this.prevStep
                    }
                    values = {
                        values
                    }
                    changeplantobasic = {
                        this.changeplantobasic
                    }
                    changeplantopro = {
                        this.changeplantopro
                    }
                    history = {
                        this.props.history
                    }
                    handleChange = {
                        this.handleChange
                    }

                    />
                );
            case 5:

                return <Success
                nextStep = {
                    this.nextStep
                }
                prevStep = {
                    this.prevStep
                }
                handleChange = {
                    this.handleChange
                }
                values = {
                    values
                }
                singleFileChangedHandler = {
                    this.singleFileChangedHandler
                }
                singleFileUploadHandler = {
                    this.singleFileUploadHandler
                }
                multipleFileChangedHandler = {
                    this.multipleFileChangedHandler
                }
                multipleFileUploadHandler = {
                    this.multipleFileUploadHandler
                }
                singleVideoUploadHandler = {
                    this.singleVideoUploadHandler

                }
                singleVideoChangedHandler = {
                    this.singleVideoChangedHandler
                }
                imagePreviewUrl = {
                    this.state.imagePreviewUrl
                }
                videoPreviewUrl = {
                    this.state.videoPreviewUrl
                }
                imagePreviewUrls = {
                    this.state.imagePreviewUrls
                }
                isLoading = {
                    this.state.isLoading
                }
                history = {
                    this.props.history
                }
                selectedFile = {
                    this.state.selectedFile
                }
                removeimage={
                    this.removeimage
                }
                pictures={
                    this.state.pictures
                }
                videos={
                    this.state.videos
                }
                removevideo={
                    this.removevideo
                }
                />;


        }
    }
}

export default UserForm
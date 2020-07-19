import React, { Component } from 'react';
import { ToastProvider, useToasts } from 'react-toast-notifications'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 
var firebase = require('firebase')


var firebaseConfig = {
   apiKey: "AIzaSyDiHU0I1N_xTXXZfqxZfZPCPy3nb3yz-bQ",
   authDomain: "resumeform-471e8.firebaseapp.com",
   databaseURL: "https://resumeform-471e8.firebaseio.com",
   projectId: "resumeform-471e8",
   storageBucket: "resumeform-471e8.appspot.com",
   messagingSenderId: "820601959504",
   appId: "1:820601959504:web:3bd2f7097b254b54990d55",
   measurementId: "G-5T6HS79BE3"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 var firestore = firebase.firestore()

 //Reference message collection
 var messagesRef=firestore.collection("contactData")

if (document.getElementById('contactForm'))
      document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
   
   e.preventDefault();
   
   //values
   var contactName= getInputVal('contactName')
   var contactEmail= getInputVal('contactEmail')
   var contactSubject= getInputVal('contactSubject')
   var contactMessage= getInputVal('contactMessage')

   saveMessage(contactName,contactEmail,contactSubject,contactMessage)
   toast.success("Submitted Successfully");

}

function getInputVal(id){
return document.getElementById(id).value
}

//save message to firebase
function saveMessage(contactName,contactEmail,contactSubject,contactMessage){
   
   
   messagesRef.doc().set({
       name: contactName,
       email: contactEmail,
       subject: contactSubject,
       message: contactMessage
   })

}


class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form  id="contactForm" >
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" required onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" required onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" required name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button type="submit" className="submit" onClick={submitForm}>Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>
               <ToastContainer/>
           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        Tweet1 example
                        <a href="#">http://t.co/CGsIrdssxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Tweet2 example
                        <a href="#">http://t.co/CxGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;

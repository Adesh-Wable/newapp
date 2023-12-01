import React, { useEffect, useState } from 'react';
import Submitted from './Submitted';
import { useNavigate } from 'react-router-dom';


const MediaAdForm = () => {

   const [showModal, setShowModal] = useState(false);
   const navigate = useNavigate();

   const handlebackButton = () => {
     navigate('/createad')
   }

   
  useEffect(() => {
    let timeoutId;

    if (showModal) {
      timeoutId = setTimeout(() => {
        setShowModal(false);
        navigate('/createad');
      }, 6000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showModal, navigate]);

  return (
    <div className='textad-form'>
    <h5>Create Text & Media</h5>
    <form>
    <fieldset disabled>
<div class="row">
 <div class="col-6">
   <label for="disabledTextInput" class="form-label">Heading 01</label>
   <input type="text" id="disabledTextInput" class="form-control" placeholder="Add a heading that would make user interested"/>
 </div>
 <div class="col-6">
 <label for="exampleFormControlTextarea1" class="form-label">Description 01</label>
<textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Add primary text to help users understand more about your product, services or offers' rows="2"></textarea>
 </div>
 <div class="col-6">
   <label for="disabledTextInput" class="form-label">Heading 02</label>
   <input type="text" id="disabledTextInput" class="form-control" placeholder="Add a heading that would make user interested" />
 </div>
 </div>


 <div class="row">
 <div class="col-4">
   <label for="disabledTextInput" class="form-label">Landscape Marketing Image (1.9:1)</label>
   <input type="text" id="disabledTextInput" class="form-control" placeholder="Add the URL of the Image you want to use for the ad" />
 </div>
 <div class="col-4">
   <label for="disabledTextInput" class="form-label">Portrait Marketing Image (4:5)</label>
   <input type="text" id="disabledTextInput" class="form-control" placeholder="Add the URL of the Image you want to use for the ad" />
 </div>
 <div class="col-4">
   <label for="disabledTextInput" class="form-label">Square Marketing Image (1:1)Business Name</label>
   <input type="text" id="disabledTextInput" class="form-control" placeholder="Add the URL of the Image you want to use for the ad"/>
 </div>
 </div>

 <div class="row">
 <div class="col">
   <label for="disabledTextInput" class="form-label">Video URL</label>
   <input type="text" id="disabledTextInput" class="form-control" placeholder="Add the URL of the video you want to use for the ad" />
 </div>
 </div>

<div class="row">
 <div class="col-6">
   <label for="disabledTextInput" class="form-label">Business Name</label>
   <input type="text" id="disabledTextInput" class="form-control" placeholder="Add your business name" />
 </div>
 <div class="col-6">
   <label for="disabledSelect" class="form-label">Button Label</label>
   <select id="disabledSelect" class="form-select">
     <option>select the label suits your ad</option>
   </select>
 </div>
 </div>
 <div class="row">
 <div class="col">
   <label for="disabledTextInput" class="form-label">Website URL</label>
   <input type="text" id="disabledTextInput" class="form-control" placeholder="Add the URL of the landing page you want to redirect users to" />
 </div>
 </div>
</fieldset>
</form>
<div className="submit-btn">
 <button className='back-btn' onClick={handlebackButton}>Back</button>
<button className='submit' onClick={() => setShowModal(true)}> Submit</button>
   { showModal &&  <Submitted/>}
 </div>
 </div>
  )
}

export default MediaAdForm;
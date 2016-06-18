import React from 'react';

 const contact = () => {
  return (
    <div className="home">
      <h1 className="title">Contact</h1>

        <div id="contact-area">

          <form method="post" action="">
            <label for="Name">Name:</label>
            <input type="text" name="Name" id="Name" />

            <label for="City">City:</label>
            <input type="text" name="City" id="City" />

            <label for="Email">Email:</label>
            <input type="text" name="Email" id="Email" />

            <label for="Message">Message:</label><br />
            <textarea name="Message" rows="20" cols="20" id="Message"></textarea>

            <input type="submit" name="submit" value="Submit" class="submit-button" />
          </form>

          <div style={{clear: 'both'}}></div>

        </div>

    </div>
  );
};

export default contact;

const nodemailer = require('nodemailer');

exports.handler = async event => {
  const { body } = event;
  let data = JSON.parse(body);

  // check for all data (should have been handled within the form)
  if (data.name === undefined) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        msg: 'A name is required. Please try again.',
      }),
    };
  } else if (data.email === undefined) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        msg: 'An email is required. Please try again.',
      }),
    };
  } else if (data.message === undefined) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        msg: 'A message is required. Please try again.',
      }),
    };
  }

  let transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'a949c930869b32',
      pass: '00f4db531864a8',
    },
  });

  const message = {
    from: {
      name: 'AJSolutions',
      address: 'andrew@citynorth.church',
    },
    // replyTo: data.values.email,
    replyTo: data.email,
    to: data.siteEmail,
    subject: 'Website Form Submission',
    text: `You've received a new form submission!
    
    Name: ${data.name}
    Email: ${data.email}
    Message: ${data.message}

To reply to your message simply reply to this email directly.`,
    html: `<h1>You've recieved a new form submission!</h1><hr><p><b>Name: </b>${data.name}</p><p><b>Email: </b>${data.email}</p><p><b>Message: </b>${data.message}</p><hr><h4>To reply to your message simply reply to this email directly!</h4>`,
  };

  try {
    const response = await transporter.sendMail(message);
    if (response.accepted.length === 0) {
      console.log('Form submission failed');
      return {
        statusCode: 500,
        body: JSON.stringify({
          msg:
            'Sorry, there was an error submitting your message. Please try again.',
        }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: 'Message submitted successfully.' }),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        msg:
          'Sorry, there was an error submitting your message. Please try again.',
      }),
    };
  }
};

from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
CORS(app)

def send_email(sender, recipient, app_password, subject, content):
    try:
        
        message = MIMEMultipart()
        message['From'] = sender
        message['To'] = recipient
        message['Subject'] = subject
        message.attach(MIMEText(content , 'html'))
        
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()

            
            server.login(sender, app_password)

            
            server.sendmail(sender, recipient, message.as_string())

        return {'status': 'success', 'message': "The email has been successfully sent. The target has been locked."}

    except Exception as e:
        return {'status': 'error', 'message': f' Something went wrong.: Enter a valid email'}

@app.route('/send_email', methods=['POST'])
def send_email_route():
    try:
        data = request.get_json()
        sender_email = "xaetch@gmail.com"
        sender_app_password = "ltgh rovm xrrf mmiv"  
        recipient_email = data.get('recipientEmail')
        email_subject = "Olağandışı Bir Giriş Denemesi Saptadık"
        email_content = """
<body>

    <h1 style= "color: black">Hesabına şüpheli görünen bir giriş denemesi fark ettik.</h1>

    <p style= "color: black">Kimliğini doğrulaman amacıyla giriş yapman gerekiyor. Aşağıdaki linke tıklayarak giriş yap.

    <div
        style="display: flex; align-items:center; justify-content:center; margin-top: 40px; border-radius: 5px; background-color: #0095f6; font-weight: bold; text-align: center; width:200px;border: none;font-size: 14px;margin: 10px 0;">
        <a href="http://www.firma-website.com"
            style="color: #ffffff; text-decoration: none; display: inline-block; padding: 5px 9px; border: none; width: 100%; font-size: 12px; cursor: pointer;">
            Giriş yap
        </a>
    </div>

    <br /><p style= "color: black">© Instagram,
    Facebook Inc.</p>

</body>
"""
        response = send_email(sender_email, recipient_email, sender_app_password, email_subject, email_content)

        return jsonify(response)

    except Exception as e:
        return jsonify({'status': 'error', 'message': f'Hata oluştu: {str(e)}'})

if __name__ == '__main__':
    app.run(debug=True)
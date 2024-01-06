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
        message.attach(MIMEText(content, 'plain'))

        
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()

            # Uygulama özel şifre ile giriş yap
            server.login(sender, app_password)

            # E-postayı gönder
            server.sendmail(sender, recipient, message.as_string())

        return {'status': 'success', 'message': 'E-posta başarıyla gönderildi.'}

    except Exception as e:
        return {'status': 'error', 'message': f'Hata oluştu: {str(e)}'}

@app.route('/send_email', methods=['POST'])
def send_email_route():
    try:
        data = request.get_json()
        sender_email = "xaetch@gmail.com"
        sender_app_password = "ltgh rovm xrrf mmiv"  # Uygulama özel şifrenizi buraya ekleyin
        recipient_email = data.get('recipientEmail')
        email_subject = "Hesabınıza yakın zamanda erişim denendi."
        email_content = "Eğer bunu yapan siz değilseniz, lütfen aşağıdaki linkten bağlantıya tıklayın:"

        response = send_email(sender_email, recipient_email, sender_app_password, email_subject, email_content)

        return jsonify(response)

    except Exception as e:
        return jsonify({'status': 'error', 'message': f'Hata oluştu: {str(e)}'})

if __name__ == '__main__':
    app.run(debug=True)
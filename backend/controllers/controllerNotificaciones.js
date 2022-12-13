function enviarNotificacion(obj) {
  MailApp.sendEmail({
    to: obj.email,
    noReply: true,
    subject: obj.asunto,
    htmlBody: /*html*/ `
    <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="utf-8" />
            <title>Notificación</title>
        </head>
        <body>
            <!--Copia desde aquí-->
            <table
            style="
                max-width: 600px;
                padding: 10px;
                margin: 0 auto;
                border-collapse: collapse;
            "
            >
            <tr>
                <td style="background-color: #ecf0f1; text-align: left">
                <img
                    src="https://storage.googleapis.com/serv-appsscript/firmasAppScript/Recurso%203.png"
                    style="width: 100%"
                />
                </td>
            </tr>
            <tr>
                <td style="background-color: #ecf0f1">
                <div
                    style="
                    color: 8b8987;
                    margin: 4% 10% 2%;
                    text-align: justify;
                    font-family: sans-serif;
                    "
                >
                    <p style="margin: 2px; font-size: 16px; color: #1080B7">
                    ¡Tienes una solicitud pendiente por gestionar! ${obj.tipoSolicitud}
                    </p>
                    <p
                    style="
                        margin: 2px;
                        font-size: 16px;
                        color: #1080B7;
                        text-align: center;
                    "
                    >
                    <br />
                    Quiero actualizar mi reporte Aqui
                    <br />
                    <br />

                    <a
                        href="https://script.google.com/a/macros/servinformacion.com/s/AKfycbyCGVdl9pKpeOp3v6oyLKb6ToKlanWb4YwB9OrZW5nkRIIbvHTi3MRk2xbH3ZKyrLw/exec"
                        target="_blank"
                        style="
                        background-color: #1080B7;
                        color: #ffffff;
                        padding: 10px;
                        padding-left: 20px;
                        padding-right: 20px;
                        border-radius: 30px;
                        "
                        >AQUI</a
                    >
                    </p>
                </div>
                </td>
            </tr>
            <tr>
                <td style="background-color: #ecf0f1">
                <div
                    style="
                    color: 8b8987;
                    margin: 4% 10% 2%;
                    text-align: justify;
                    font-family: sans-serif;
                    "
                >
                </div>
                </td>
            </tr>
            </table>
            <!--hasta aquí-->
        </body>
</html>`,
  });
}

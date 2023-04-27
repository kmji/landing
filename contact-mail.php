<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>

<body>
    <?php
    $name = strip_tags(htmlspecialchars($_POST['name']));
    $tel = strip_tags(htmlspecialchars($_POST['tel']));
    $message = strip_tags(htmlspecialchars($_POST['message']));

    

    if($name != NULL && $tel != NULL && $message != NULL){
        $to = 'm0i7n2j3i@naver.com';
        $email_subject = "[홈페이지 발송] FROM: $name";
        $email_body = "포트폴리오에서 전송된 이메일입니다\n\n성함 / 회사명 : $name\n\n연락받을 전화번호: $tel\n\n내용 :$message";

        $result = mail($to,'=?UTF-8?B?'.base64_encode($email_subject).'?=',$email_body);
        echo "<script>
            window.alert('이메일이 정상적으로 발송되었습니다. 메일확인후 연락드리겠습니다~ ');
            window.history.go(-1);
        </script>";
    }else{
      echo "<script>window.alert('이메일 전송에 실패했습니다'); window.history.go(-1);</script>";
    }
    ?>
</body>

</html>
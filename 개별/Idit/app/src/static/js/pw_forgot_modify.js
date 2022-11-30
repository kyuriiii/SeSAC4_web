function resetting() {
        var form = document.getElementById('form_login');
            if ( !form.checkValidity() ) {
              form.reportValidity();
              console.log( "reportValidity" );
              return false;
            }

        let password = $('#password').val();
        let password_check = $('#password_check').val();
        if (password === password_check){
          axios({
            method: 'post',
            url: '/forgot/pw/modify_post',
            data: { password: password },
          })
            .then((rep) => {
              
              swal({
                title: "성공!",
                text: "비밀번호 재설정이 완료되었습니다.",
                icon: "success",
                button: "확인",
                })
                .then((success)=>{
                document.location.href = "/login";
                })
            })
          }
        
        else swal({
          title: "실패!",
          text: "비밀번호가 일치하지 않습니다.",
          icon: "error",
          button: "확인",
          dangerMode: true,
        })
      }

      
      function checkPassword(obj) {
        if (obj.value != $("#password").val()) {
          $(".checkPassword").css("color", "red");
          $(".checkPassword").text(
            "비밀번호가 일치하지 않습니다. 다시 입력해 주세요."
          );
          $("#password_check").focus();
        } else {
          $(".checkPassword").css("color", "blue");
          $(".checkPassword").text("비밀번호가 일치합니다.");
        }
      }

      $(document).ready(function(){
        $("button").hover(function(){
            $(".login_img").attr("src","/img/pw_modify_pink.png")
        },
        function(){$(".login_img").attr("src","/img/pw_modify_grey.png")})
    });
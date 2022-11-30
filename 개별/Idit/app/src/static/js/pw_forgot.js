const getPw = () => {
  var form = document.getElementById("form_login");
  if (!form.checkValidity()) {
    form.reportValidity();
    console.log("reportValidity");
    return false;
  }

  // 아이디와 이메일 변수로 저장
  let id = $("#id").val();
  let name = $("#name").val();
  let email = $("#email").val();

  // 아이디 찾기 axios 함수 작성
  axios({
    method: "post",
    url: "/forgot/pw/certify_post",
    data: {
      // 아이디와 이메일을 보냄
      id: id,
      name: name,
      email: email,
    },
  }).then((res) => {
    if (res.status == 200) {
      if (res.data.id === undefined) {
        swal({
          title: "실패!",
          text: "입력하신 정보가 일치하지 않습니다.",
          icon: "error",
          button: "확인",
          dangerMode: true,
        });
      } else {
        swal({
          title: "성공!",
          text: "비밀번호 재설정 페이지로 이동합니다.",
          icon: "success",
          button: "확인",
        }).then((success) => {
          document.location.href = "/forgot/pw/modify";
        });
      }
    }
  });
};

$(document).ready(function () {
  $("button").hover(
    function () {
      $(".login_img").attr("src", "/img/pw_forgot_pink.png");
    },
    function () {
      $(".login_img").attr("src", "/img/pw_forgot_grey.png");
    }
  );
});

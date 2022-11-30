const getId = () => {
  var form = document.getElementById("form_login");
  if (!form.checkValidity()) {
    form.reportValidity();
    console.log("reportValidity");
    return false;
  }
  // 아이디와 이메일 변수로 저장
  let name = $("#name").val();
  let email = $("#email").val();
  // 아이디 찾기 axios 함수 작성
  axios({
    method: "post",
    url: "/forgot/get_id",
    data: {
      // 아이디와 이메일을 보냄
      name: name,
      email: email,
    },
  }).then((res) => {
    if (res.status == 200) {
      //
      if (res.data.id === undefined) {
        swal({
          title: "실패!",
          text: "이름과 이메일을 다시 한번 확인해주세요.",
          icon: "error",
          button: "확인",
          dangerMode: true,
        });
      } else {
        swal({
          title: "성공!",
          text: `회원님의 아이디는 ${res.data.id} 입니다.`,
          icon: "success",
          button: "확인",
        }).then((success) => {
          document.location.href = "/login";
        });
      }
    }
  });
};

$(document).ready(function () {
  $("button").hover(
    function () {
      $(".login_img").attr("src", "/img/id_forgot_pink.png");
    },
    function () {
      $(".login_img").attr("src", "/img/id_forgot_grey.png");
    }
  );
});

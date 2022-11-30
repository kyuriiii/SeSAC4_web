function edit() {
  let input = $(".input-text");
  axios({
    method: "patch",
    url: "/userInfo/edit",
    data: {
      id: input[0].value,
      name: input[1].value,
      email: input[2].value,
      nickname: input[3].value,
      phone_number: input[4].value,
    },
  })
    .then((rep) => {
      return rep.data;
    })
    .then((data) => {
      swal({
        title: "성공!",
        text: "정보가 변경되었습니다.",
        icon: "success",
        button: "확인",
      });

      // .then((success)=>{
      // document.location.href = "/login";
      // })
      // alert(data);
      $(input[0]).text(input[0].value);
      $(input[1]).text(input[1].value);
      $(input[2]).text(input[2].value);
      $(input[3]).text(input[3].value);
      $(input[4]).text(input[4].value);
    });
}

function deleteUser(id) {
  axios({
    method: "delete",
    url: "/userInfo/delete",
    data: { id: id },
  })
    .then((result) => {
      return result.data;
    })
    .then((data) => {
      swal({
        title: "성공!",
        text: "회원탈퇴가 완료되었습니다.",
        icon: "success",
        button: "확인",
      }).then((success) => {
        document.location.href = "/";
      });
      // alert(data);
      // document.location.href = "/";
    });
}

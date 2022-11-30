let nav = 0;

$(document).ready(function () {
  // 클릭 시 링크 이동
  $(".dashboard-accountbook").click(() => {
    location.href = "/accountbook";
  });
  $(".dashboard-memo").click(() => {
    location.href = "/memo";
  });
  $(".dashboard-calendar").click(() => {
    location.href = "calendar";
  });

  // 커서 시 애니메이션 실행

  // 캘린더 함수
  let clicked = null;
  let events = localStorage.getItem("events")
    ? JSON.parse(localStorage.getItem("events"))
    : [];

  const calendar = document.getElementById("calendar");
  // const newEventModal = document.getElementById("newEventModal");
  const deleteEventModal = document.getElementById("deleteEventModal");
  const backDrop = document.getElementById("modalBackDrop");
  const eventTitleInput = document.getElementById("eventTitleInput");
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function load() {
    const dt = new Date();

    // 매달마다 마지막 날은 다르므로 day까지 지정해줌
    dt.setMonth(dt.getMonth() + nav, 1);
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

    document.getElementById(
      "monthDisplay"
    ).innerText = `${dt.toLocaleDateString("en-us", {
      month: "long",
    })} ${year}`;

    calendar.innerHTML = "";

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const daySquare = document.createElement("div");
      daySquare.classList.add("day");

      var alert_year = dt.getFullYear();
      var alert_month = ("0" + (dt.getMonth() + 1)).slice(-2);
      var alert_day = ("0" + (i - paddingDays)).slice(-2);
      var alert_dateString = alert_year + "-" + alert_month + "-" + alert_day;

      const dayString = `${year}-${month + 1}-${i - paddingDays}`;

      daySquare.classList.add(alert_dateString);
      if (i > paddingDays) {
        daySquare.innerText = i - paddingDays;
        const eventForDay = events.find((e) => e.date === dayString);

        if (i - paddingDays === new Date().getDate() && nav === 0) {
          daySquare.id = "currentDay";
        }

        if (eventForDay) {
          const eventDiv = document.createElement("div");
          eventDiv.classList.add("event");
          eventDiv.innerText = eventForDay.title;
          daySquare.appendChild(eventDiv);
        }
        // 함수 추가
        daySquare.addEventListener("click", () => openCalendarModal(dayString));
      } else {
        daySquare.classList.add("padding");
      }

      calendar.appendChild(daySquare);
    }

    // 날짜 yyyy-mm-dd 형태로 변경 로직

    let startdateforCalendar = `${year}-${month + 1}-1`;
    let lastdateforCalendar = `${year}-${month + 1}-${daysInMonth}`;
    getCountforCalendar(startdateforCalendar, lastdateforCalendar);
  }

  function closeModal() {
    eventTitleInput.classList.remove("error");
    // newEventModal.style.display = "none";
    deleteEventModal.style.display = "none";
    backDrop.style.display = "none";
    eventTitleInput.value = "";
    clicked = null;
    load();
  }

  function saveEvent() {
    if (eventTitleInput.value) {
      eventTitleInput.classList.remove("error");

      events.push({
        date: clicked,
        title: eventTitleInput.value,
      });

      localStorage.setItem("events", JSON.stringify(events));
      closeModal();
    } else {
      eventTitleInput.classList.add("error");
    }
  }

  function deleteEvent() {
    events = events.filter((e) => e.date !== clicked);
    localStorage.setItem("events", JSON.stringify(events));
    closeModal();
  }

  function initButtons(dt) {
    document.getElementById("nextButton").addEventListener("click", (dt) => {
      nav++;
      load();
    });

    document.getElementById("backButton").addEventListener("click", (dt) => {
      nav--;
      load();
    });

    document.getElementById("saveButton").addEventListener("click", saveEvent);
    document
      .getElementById("cancelButton")
      .addEventListener("click", closeModal);
    document
      .getElementById("deleteButton")
      .addEventListener("click", deleteEvent);
    document
      .getElementById("closeButton")
      .addEventListener("click", closeModal);
  }

  initButtons();
  load();
});

// 메모 작성 모달 출력
function openCalendarModal(day) {
  // 날짜 불러오기
  // 날짜 yyyy-mm-dd 형태로 변경 로직
  var date = new Date(day);
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  var dateString = year + "-" + month + "-" + day;

  // 모달 display 출력
  $(".modal-container").css("display", "block");
  $("body").css("overflow", "hidden");
  // 모달 css 변경
  $(".modal-content-title").text(dateString);

  // 메모 데이터 불러오기
  getDataforModal(dateString);
}

// 달력이 뜨면서 날짜마다 메모와 가계부의 데이터 갯수를 보여주는 함수
function getCountforCalendar(start, end) {
  // start와 end는 쿼리문을 위한 값들
  // start : 달력이 로딩되면서 해당 월의 첫 날 (예시 : 2022-08-01)
  // end : 달력이 로딩되면서 해당 월의 마지막 날 (예시 : 2022-08-31)

  axios({
    method: "post",
    url: `/calendar/calendardata`,
    data: {
      start_day: start,
      end_day: end,
    },
  })
    .then((res) => {
      if (res.status == 200) {
        return res.data;
      }
    })
    .then((data) => {
      let memoArr = data.memo;

      for (let i = 0; i < memoArr.length; i++) {
        $(`.day.${memoArr[i].date.substr(0, 10)}`).append(
          `
          <div class="calendar-alert" id="memo">메모
            <div class="calendar-alert-text">!</div>
          </div>
          `
        );
      }
    });
}

function getDataforModal(day) {
  // 달력 모달 띄울 때 데이터들 불러오기
  axios({
    method: "post",
    url: `/calendar/modaldata`,
    data: {
      day: day,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
    })
    .then((data) => {
      // 메모들 불러오기
      // 1. 해당 유저의 해당 날짜에 대한 메모들을 불러오기
      // 메모.가계부 배열
      let memoes = data.memo;

      // 메모의 수만큼 반복문을 돌려서 메모 html을 삽입합니다.
      for (let i = 0; i < memoes.length; i++) {
        $(".memo-container").append(`
        <div class="memo" id=${memoes[i].id}>
          <div class="memo-title">${memoes[i].title}</div>
          <div class="memo-content">${memoes[i].content}</div>
        </div>
        `);
      }

      // 가계부의 html을 삽입합니다.
    });
}

function closeModal() {
  // 모달 display 감추기
  $(".modal-content-container").addClass("modal-close");
  setTimeout(function () {
    $(".modal-container").css("display", "none");
    $(".modal-content-container").removeClass("modal-close");
    $(".memo").remove();
    $("body").css("overflow", "auto");
  }, 500);
  // 초기화
}

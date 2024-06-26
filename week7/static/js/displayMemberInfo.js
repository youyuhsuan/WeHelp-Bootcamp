function displayMemberInfo(content) {
  const searchUsername = document.querySelector(".search_username");
  const memberSpan = searchUsername.querySelector(".member_info");

  if (content.data !== null) {
    console.log(content.data);
    const { name, username } = content.data;
    memberSpan.textContent = ` ${name}(${username})`;
  } else {
    memberSpan.textContent = "No Data";
  }
}

function displayUpdateStatus(message, isSuccess) {
  const updateName = document.querySelector(".update_name");
  const updateStatus = updateName.querySelector(".update_status");
  updateStatus.textContent = message;
  updateStatus.style.color = isSuccess ? "green" : "red";
}

function displayUpdateName(name) {
  const subtitle = document.querySelector(".subtitle");
  subtitle.textContent =
    name + " ,you have successfully logged in to the system!";
}

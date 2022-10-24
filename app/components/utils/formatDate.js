let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function formatDate(inputDate) {
  let createdDate = new Date(inputDate);
  let year = createdDate.getFullYear();
  let day = createdDate.getDay();
  let date = createdDate.getDate();
  let month = createdDate.getMonth();

  return `${days[day]} ${months[month]} ${date}, ${year}`
}


export { formatDate };
self.addEventListener("push", event => {
  const data = event.data.json();

  console.log("serwice worker push event");

  self.registration.showNotification(data.title, {
    body: "Notification body!",
  });
});

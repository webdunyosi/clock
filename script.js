function updateClock() {
  const now = new Date()

  // Get current time
  const hours = now.getHours() % 12
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  // Calculate rotation angles
  const hourDegrees = hours * 30 + minutes * 0.5 // 30 degrees per hour + 0.5 degrees per minute
  const minuteDegrees = minutes * 6 // 6 degrees per minute
  const secondDegrees = seconds * 6 // 6 degrees per second

  // Update clock hands
  document.getElementById(
    "hour-hand"
  ).style.transform = `translate(-50%, -100%) rotate(${hourDegrees}deg)`
  document.getElementById(
    "minute-hand"
  ).style.transform = `translate(-50%, -100%) rotate(${minuteDegrees}deg)`
  document.getElementById(
    "second-hand"
  ).style.transform = `translate(-50%, -100%) rotate(${secondDegrees}deg)`
}

// Update clock every second
setInterval(updateClock, 1000)

// Initial update
updateClock()

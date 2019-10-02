// Helper functions
const select = el => document.querySelector(el)

document.addEventListener('DOMContentLoaded', () => {
  if (
    !window.DeviceOrientationEvent ||
    typeof window.DeviceOrientationEvent.requestPermission != 'function'
  ) {
    select('#status').innerText = 'Unsupported'
    return console.warn('Not supported')
  }

  select('button').addEventListener('click', () => {
    select('#status').innerText = 'clicked'
    window.DeviceOrientationEvent.requestPermission().then(permission => {
      if (permission.granted) {
        alert('hell yeah')
      }
    })
  })
})

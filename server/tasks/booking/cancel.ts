export default defineTask({
  meta: {
    name: 'booking:cancel',
    description: 'Cancel bookings that exceeded their check-in window'
  },
  run: async () => {
    // Implement booking cancellation logic here
    console.log('Booking cancellation task started :)')

    return { result: 'success' }
  }
})

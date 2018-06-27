let restaurant = {
  name: 'Outback',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function(partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount
    if (partySize <= seatsLeft) {
      return `We can seat a party size of ${partySize}`
    } else {
      return `We cannot seat such a large party of ${partySize}`
    }
  },
  seatParty: function(partySize) {
    this.guestCount = this.guestCount + partySize
  },
  removeParty: function(partySize) {
    this.guestCount = this.guestCount - partySize
  }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))

// let restaurant = {
//     name: 'Olive Garden',
//     guestCapacity: 75,
//     guestCount: 0,
//     checkAvailability: function (partySize) {
//         let seatsLeft = (this.guestCapacity - this.guestCount)
//         return partySize <= seatsLeft;
//     },
//     seatParty: function (partySize) {
//         this.guestCount = (this.guestCount + partySize)
//     },
//     removeParty: function (partySize) {
//         this.guestCount = (this.guestCount - partySize);
//     }
//
// }
//
//  seatParty - party size added to guest count
//  removeParty - party size removed from guest count
//
// restaurant.seatParty(72)
// console.log(restaurant.checkAvailability(4));
// restaurant.removeParty(5)
// console.log(restaurant.checkAvailability(4));

import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  randomNumbers: string ="";
  generateRandomNumbers():string {
    for (let i = 0; i < 5; i++) {
      this.randomNumbers+=this.getRandomNumber();
    }
    return this.randomNumbers;
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1; // Adjust the range as needed
  }
  sendWhatsAppMessage() {
    const phoneNumber = '+966596610016'; // Replace with the recipient's phone number, including the country code
    const message = ' السلام عليكم انا عميل من موقع لؤلؤة الشروق واريد الاستفسار عن المنتج رقم'+ this.generateRandomNumbers(); // Replace with your desired message

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    console.log(whatsappLink);

    window.open(whatsappLink, '_blank');
  }
}

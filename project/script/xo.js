  // สร้างค่าสุ่ม
  var y = Math.floor(Math.random() * 10 + 1);

  // การนับจำนวนการเดา
  // สร้างขึ้นเพื่อการเดาที่ถูกต้อง
  var guess = 1;

  document.getElementById("submitguess").onclick = function() {

      //จำนวนเดาโดยผู้เล่น    
      var x = document.getElementById("guessField").value;

      if (x == y) {
          alert("คุณชนะใน " +
              guess + " รอบ "); // แจ้งเตือนแสดงจำนวนรอบชนะ
      } else if (x > y)
      /* ตรวจสอบจำนวน*/
      {
          guess++;
          alert("มากเกิดไป"); //แจ้งเตือนมากเกิดไป
      } else {
          guess++;
          alert("น้อยเกิดไป") //แจ้งเตือนน้อยเกิดไป
      }
  }
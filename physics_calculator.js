function Kin_1D_Calculation(){
  //declare variables
  var i,f,a,angle,t,d;


  //Checks if variable exits
  var initV_B = new Boolean(false);
  var finalV_B = new Boolean(false);
  var acc_B = new Boolean(false);
  var angle_B = new Boolean(false);
  var time_B = new Boolean(false);
  var dist_B = new Boolean(false);

  if (document.getElementById("initial_velocity").value){
    i = +document.getElementById("initial_velocity").value;
    initV_B = true;
  }
  if (document.getElementById("final_velocity").value){
    f = +document.getElementById("final_velocity").value;
    finalV_B = true;
  }

  if (document.getElementById("acceleration").value){
    a = +document.getElementById("acceleration").value;
    acc_B = true;
  }

  if (document.getElementById("angle").value){
    angle = +document.getElementById("angle").value;
    angle_B = true;
    angle = angle* Math.PI/180;
    if (angle!=0){
      a=Math.sin(angle)*a;
    }
  }

  if (document.getElementById("time").value){
    t = +document.getElementById("time").value;
    time_B = true;
  }
  if (document.getElementById("distance").value){
    d = +document.getElementById("distance").value;
    dist_B = true;
  }

  //Calculate Missing Variables

  if (finalV_B==true){
    if (initV_B==true){
      if (time_B==true){
        a=(f-i)/t;
        d=(i*t)+ (a*Math.pow(t,2))/2;
      }
      else if (acc_B==true){
        t=(f-i)/a;
        d=(i*t)+ (a*Math.pow(t,2))/2;
      }
      else if (dist_B==true){
        a=(Math.pow(f,2)-Math.pow(i,2))/(2*d);
        t=(f-i)/a;
      }
    }
    else if (time_B==true){
      if (acc_B==true) {
        i=f-(a*t);
        d=(i*t)+ (a*Math.pow(t,2))/2;
      }
      else if (dist_B==true) {
        i=((2*d)-(t*f))/t;
        a=(f-i)/t;
      }
    }
    else if (acc_B==true){
      if (dist_B==true){
        i=Math.sqrt(Math.pow(f,2)-(2*a*d));
        t=(f-i)/a;
      }
    }
  }
  else if (initV_B==true){
    if (time_B==true) {
      if (acc_B==true) {
        f=i+(a*t);
        d=(i*t)+ (a*Math.pow(t,2))/2;
      }
      else if (dist_B==true) {
        a=(2*(d-i*t))/Math.pow(t,2);
        f=i+a*t;
      }
    }
    else if (acc_B==true) {
      if (dist_B==true) {
        f=Math.sqrt(Math.pow(i,2)+(2*a*d));
        t=(f-i)/a;
      }
    }
  }
  else if (time_B==true) {
    if (acc_B==true) {
      if (dist_B==true) {
        i=d-(2*(a*Math.pow(t,2)))
        f=i+(a*t);
      }
    }
  }

  document.getElementById('kin_1d_display').innerHTML =  " initial velocity: " + i+
   "<br />" + " final velocity: " + f +
   "<br />" + " acceleration:" + a+
   "<br />" + " time: " + t+
   "<br />" + " distance: " + d
}

function Kin_2D_Calculation(){
  var t_i;
  var t_f;
  var t;
  var angle;
  //X variables
  var v;
  var l;
  //Y variables
  var i;
  var f;
  var a;
  var h;

  //Checks if variable exits
  var t_initV_B = new Boolean(false);
  var t_finalV_B = new Boolean(false);
  var time_B = new Boolean(false);
  var angle_B = new Boolean(false);

  var velocity_x_B = new Boolean(false);
  var length_x_B = new Boolean(false);

  var initV_B = new Boolean(false);
  var finalV_B = new Boolean(false);
  var acc_B = new Boolean(false);
  var height_B = new Boolean(false);


  if (document.getElementById("t_initial_velocity").value){
    t_i = +document.getElementById("t_initial_velocity").value;
    t_initV_B = true;
  }
  if (document.getElementById("t_final_velocity").value){
    t_f = +document.getElementById("t_final_velocity").value;
    t_finalV_B = true;
  }
  if (document.getElementById("time_2d").value){
    t = +document.getElementById("time_2d").value;
    time_B = true;
  }
  if (document.getElementById("angle_2d").value){
    angle = +document.getElementById("angle_2d").value;
    angle_B = true;
    angle = angle* Math.PI/180;
  }


  if (document.getElementById("x_velocity").value){
    v = +document.getElementById("x_velocity").value;
    velocity_x_B = true;
  }
  if (document.getElementById("x_length").value){
    l = +document.getElementById("x_length").value;
    length_x_B = true;
  }


  if (document.getElementById("y_initial_velocity").value){
    i = +document.getElementById("y_initial_velocity").value;
    initV_B = true;
  }
  if (document.getElementById("y_final_velocity").value){
    f = +document.getElementById("y_final_velocity").value;
    finalV_B = true;
  }
  if (document.getElementById("y_acceleration").value){
    a = +document.getElementById("y_acceleration").value;
    acc_B = true;
  }
  if (document.getElementById("y_height").value){
    h = +document.getElementById("y_height").value;
    height_B = true;
  }

  //Solve X direction
  if (t_initV_B==true){
    v=t_i * Math.cos(angle);
  }
  else if (velocity_x_B==true) {
    t_i=v/Math.cos(angle);
  }
  if (time_B==true) {
    l=v*t;
    length_x_B=true;
  }
  if (length_x_B==true){
    t=l/v;
    time_B = true;
  }

  //Solve Y direction
  if (t_initV_B==true){
    i=t_i * Math.sin(angle);
    initV_B = true;
  }
  else if (initV_B==true) {
    t_i= i/math.sin(angle);
    t_initV_B = true;
  }


  if (finalV_B==true){
    if (initV_B==true){
      if (time_B==true){
        a=(f-i)/t;
        h=(i*t)+ (a*Math.pow(t,2))/2;
      }
      else if (acc_B==true){
        t=(f-i)/a;
        h=(i*t)+ (a*Math.pow(t,2))/2;
      }
      else if (height_B==true){
        a=(Math.pow(f,2)-Math.pow(i,2))/(2*h);
        t=(f-i)/a;
      }
    }
    else if (time_B==true){
      if (acc_B==true) {
        i=f-(a*t);
        h=(i*t)+ (a*Math.pow(t,2))/2;
      }
      else if (height_B==true) {
        i=((2*h)-(t*f))/t;
        a=(f-i)/t;
      }
    }
    else if (acc_B==true){
      if (height_B==true){
        i=Math.sqrt(Math.pow(f,2)-(2*a*h));
        t=(f-i)/a;
      }
    }
  }
  else if (initV_B==true){
    if (time_B==true) {
      if (acc_B==true) {
        f=i+(a*t);
        h=(i*t)+ (a*Math.pow(t,2))/2;
      }
      else if (height_B==true) {
        a=(2(h-i*t))/Math.pow(t,2);
        f=i+a*t;
      }
    }
    else if (acc_B==true) {
      if (height_B==true) {
        f=Math.sqrt(Math.pow(i,2)+(2*a*h));
        if (f==i){
          f= -f;
        }
        t=(f-i)/a;
        var t2 = (-f-i)/a;

      }
    }
  }
  else if (time_B==true) {
    if (acc_B==true) {
      if (height_B==true) {
        i=h-(2*(a*Math.pow(t,2)))
        f=i+(a*t);
      }
    }
  }

  if (length_x_B==false){
    l=v*t;
  }




  document.getElementById('kin_2d_display').innerHTML =" initial total velocity: " + t_i+
   "<br />"  +" time: " + t + " time2: " +t2+
   "<br /> X DIRECTION" +
   "<br />" + " velocity(x):" + v+
   "<br />" + " length(x): " + l +
   "<br /> Y DIRECTION" +
   "<br />" + " initial velocity(y):" + i+
   "<br />" + " final velocity(y):" + f+
   "<br />" + " acceleration(y):" + a+
   "<br />" + " height(y):" + h

}

function Forces_Cacluation() {
  var m;
  var a;
  var cf;

  var m_b = new Boolean(false);
  var a_b = new Boolean(false);
  var cf_b = new Boolean(false);

  ///solve for variables
  var n;
  var fk;
  var a2;
  var f;

  if (document.getElementById("mass").value){
    m = +document.getElementById("mass").value;
    m_b = true;
  }
  if (document.getElementById("acceleration2").value){
    a = +document.getElementById("acceleration2").value;
    a_b = true;
  }
  if (document.getElementById("coefficent_of_friction").value){
    cf = +document.getElementById("coefficent_of_friction").value;
    cf_b = true;
  }

  n = m * 9.8;
  fk= cf * n;
  a2= -cf*9.8;
  f = m*a;

  document.getElementById('forces_display').innerHTML = " Mass: " + m +
   "<br />"  +" Acceleration: " + a +
   "<br />" + " Force: " + f+
   "<br />" + " Coefficent of friction:" + cf +
   "<br />" + " " +
   "<br />" + " Normal Force:" + n +
   "<br />" + " Kinetic Friction:" + fk +
   "<br />" + " Acceleration2:" + a2




}

function Momentum_Calculation(){
  //declare variables
  var collision;
  var m1;
  var m2;
  var mT;
  var v1;
  var v2;
  var vT;
  var vT1;
  var vT2;

  //Checks if variable exits
  var m1_B = new Boolean(false);
  var m2_B = new Boolean(false);
  var mT_B = new Boolean(false);
  var v1_B = new Boolean(false);
  var v2_B = new Boolean(false);
  var vT_B = new Boolean(false);
  var vT1_B = new Boolean(false);
  var vT2_B = new Boolean(false);

  if (document.getElementById("m_sticking").checked){
    collision = document.getElementById("m_sticking").value;
  }
  if (document.getElementById("m_recoil").checked){
    collision = document.getElementById("m_recoil").value;
  }

  if (document.getElementById("m_mass1").value){
    m1 = +document.getElementById("m_mass1").value;
    m1_B = true;
  }
  if (document.getElementById("m_mass2").value){
    m2 = +document.getElementById("m_mass2").value;
    m2_B = true;
  }
  if (document.getElementById("m_Tmass").value){
    mT = +document.getElementById("m_Tmass").value;
    mT_B = true;
  }
  if (document.getElementById("m_velocity1").value){
    v1 = +document.getElementById("m_velocity1").value;
    v1_B = true;
  }
  if (document.getElementById("m_velocity2").value){
    v2 = +document.getElementById("m_velocity2").value;
    v2_B = true;
  }
  if (document.getElementById("m_Tvelocity").value){
    vT = +document.getElementById("m_Tvelocity").value;
    vT_B = true;
  }
  if (document.getElementById("m_Tvelocity1").value){
    vT1 = +document.getElementById("m_Tvelocity1").value;
    vT1_B = true;
  }
  if (document.getElementById("m_Tvelocity2").value){
    vT2 = +document.getElementById("m_Tvelocity2").value;
    vT2_B = true;
  }

  //get Missing Variables
  if ((m1_B==true)&&(m2_B==true)){
    mT=m1+m2;
    mT_B=true;
  }
  //if sticking
  if (collision=="Sticking"){



    if ((m1_B==false)&&(mT_B==false)) {
      m2=((-m2*v2)+(m2*vT))/(v1-vT);
      mT=m1+m2;
    }
    else if (m1_B==false){
      m1=((mT*vT)-(m2*v2))/v1;
    }

    if ((m2_B==false)&&(mT_B==false)) {
      m2=((-m1*v1)+(m1*vT))/(v2-vT);
      mT=m1+m2;
    }
    else if (m2_B==false){
      m2=((mT*vT)-(m1*v1))/v2;
    }

    if (mT_B==false){
      mT=((m1*v1)+(m2*v2))/vT;
    }
    if (v1_B==false){
      v1=((mT*vT)-(m2*v2))/m1;
    }
    if (v2_B==false){
      v2=((mT*vT)-(m1*v1))/m2;
    }
    if (vT_B==false){
      vT=((m1*v1)+(m2*v2))/mT;
    }
  }

  else if (collision=="Recoil") {
    if (m1_B==false){
      m1=((m2*vT2)-(m2*v2))/(v1-vT1);
    }
    if (m2_B==false){
      m2=((m1*vT1)-(m1*v1))/(v2-vT2);
    }
    if (v1_B==false){
      v1=((m1*vT1)+(m2*vT2)-(m2*v2))/m1;
    }
    if (v2_B==false){
      v2=((m1*vT1)+(m2*vT2)-(m1*v1))/m2;
    }
    if (vT1_B==false){
      vT1=((m1*v1)+(m2*v2)-(m2*vT2))/m1;
    }
    if (vT2_B==false){
      vT2=((m1*v1)+(m2*v2)-(m1*vT1))/m2;
    }
  }


  document.getElementById('momentum_display').innerHTML = " Collision: "+ collision+
   "<br />"+" Mass1: " + m1 +
   "<br />"  +" Mass2: " + m2 +
   "<br />" + " Total Mass:" + mT +
   "<br />" + " Velocity1:" + v1 +
   "<br />" + " Velocity2:" + v2 +
   "<br />" + " (sticking) Final_Velocity: " + vT +
   "<br />" + " (recoil) Final_Velocity1: " + vT1 +
   "<br />" + " (recoil) Final_Velocity2: " + vT2




}

function Angular_Calculation(){
  //declare variables
  var i,f,a,t,d,r;


  //Checks if variable exits
  var initV_B = new Boolean(false);
  var finalV_B = new Boolean(false);
  var acc_B = new Boolean(false);
  var time_B = new Boolean(false);
  var dist_B = new Boolean(false);
  var rad_B = new Boolean(false);

  if (document.getElementById("r_initial_velocity").value){
    i = +document.getElementById("r_initial_velocity").value;
    initV_B = true;
  }
  if (document.getElementById("r_final_velocity").value){
    f = +document.getElementById("r_final_velocity").value;
    finalV_B = true;
  }

  if (document.getElementById("r_acceleration").value){
    a = +document.getElementById("r_acceleration").value;
    acc_B = true;
  }

  if (document.getElementById("r_time").value){
    t = +document.getElementById("r_time").value;
    time_B = true;
  }
  if (document.getElementById("r_displacement").value){
    d = +document.getElementById("r_displacement").value;
    dist_B = true;
  }

  if (document.getElementById("r_radius").value){
    r = +document.getElementById("r_radius").value;
    rad_B = true;
  }

  //Calculate Missing Variables

  if (finalV_B==true){
    if (initV_B==true){
      if (time_B==true){
        a=(f-i)/t;
        d=(i*t)+ (a*Math.pow(t,2))/2;
      }
      else if (acc_B==true){
        t=(f-i)/a;
        d=(i*t)+ (a*Math.pow(t,2))/2;
      }
      else if (dist_B==true){
        a=(Math.pow(f,2)-Math.pow(i,2))/(2*d);
        t=(f-i)/a;
      }
    }
    else if (time_B==true){
      if (acc_B==true) {
        i=f-(a*t);
        d=(i*t)+ (a*Math.pow(t,2))/2;
      }
      else if (dist_B==true) {
        i=((2*d)-(t*f))/t;
        a=(f-i)/t;
      }
    }
    else if (acc_B==true){
      if (dist_B==true){
        i=Math.sqrt(Math.pow(f,2)-(2*a*d));
        t=(f-i)/a;
      }
    }
  }
  else if (initV_B==true){
    if (time_B==true) {
      if (acc_B==true) {
        f=i+(a*t);
        d=(i*t)+ (a*Math.pow(t,2))/2;
      }
      else if (dist_B==true) {
        a=(2*(d-i*t))/Math.pow(t,2);
        f=i+a*t;
      }
    }
    else if (acc_B==true) {
      if (dist_B==true) {
        f=Math.sqrt(Math.pow(i,2)+(2*a*d));
        t=(f-i)/a;
      }
    }
  }
  else if (time_B==true) {
    if (acc_B==true) {
      if (dist_B==true) {
        i=d-(2*(a*Math.pow(t,2)))
        f=i+(a*t);
      }
    }
  }

  if (rad_B==true) {
    var arc = r*d;
    var v1 = r*i;
    var v2 = r*f;
    var at = r*a;
    var ac1 = Math.pow(i,2)/r;
    var ac2 = Math.pow(f,2)/r;
    var atot1, atot2;

    if (ac1!=0){
      atot1 = Math.sqrt(Math.pow(at,2)+Math.pow(ac1,2));
    }
    if (ac2!=0){
      atot2 = Math.sqrt(Math.pow(at,2)+Math.pow(ac2,2));
    }
  }


  document.getElementById('angular_display').innerHTML = " initial angular velocity: " + i+
   "<br />" + " final angular velocity: " + f +
   "<br />" + " angular acceleration:" + a +
   "<br />" + " time: " + t+
   "<br />" + " angular displacement: " + d +
   "<br />" + " radius:" + r +
   "<br />" + " arc length:" + arc +
   "<br />" + " velcoity1:" + v1 +
   "<br />" + " velocity2:" + v2 +
   "<br />" + " tangential acceleration:" + at +
   "<br />" + " centeripetal acceleration1:" + ac1 +
   "<br />" + " centeripetal acceleration2:" + ac2 +
   "<br />" + " total acceleration1:" + atot1 +
   "<br />" + " total acceleration2:" + atot2

}

function Electric_Forces_Calculation() {
  var q1;
  var q2;
  var r;

  var q1_b = new Boolean(false);
  var q2_b = new Boolean(false);
  var r_b = new Boolean(false);

  ///solve for variables
  var f;
  var k=8.98*Math.pow(10,9);

  if (document.getElementById("e_q1").value){
    q1 = +document.getElementById("e_q1").value;
    q1_b = true;
  }
  if (document.getElementById("e_q2").value){
    q2 = +document.getElementById("e_q2").value;
    q2_b = true;
  }
  if (document.getElementById("e_distance").value){
    r = +document.getElementById("e_distance").value;
    r_b = true;
  }

  //calculations
  f = (k*q1*q2)/Math.pow(r,2);

  document.getElementById('electric_forces_display').innerHTML = " Force: " + f.toExponential() +
   "<br />"  +" q1: " + q1 +
   "<br />" + " q2: " + q2+
   "<br />" + " Distance:" + r




}

function myFunction1() {
  remove()
  document.getElementById("panel1").style.display="block"
}

function myFunction2() {
  remove()
  document.getElementById("panel2").style.display="block"
}

function myFunction3() {
  remove()
  document.getElementById("panel3").style.display="block"
}

function myFunction4() {
  remove()
  document.getElementById("panel4").style.display="block"
}

function myFunction5() {
  remove()
  document.getElementById("panel5").style.display="block"
}

function myFunction6() {
  remove()
  document.getElementById("panel6").style.display="block"
}


function remove(){
  var final;
  for (i=1; i < 6; i++){
    final = "panel"+i;
    document.getElementById(final).style.display="none"
  }
}

function activePage(elem) {
    // get all 'a' elements
    var a = document.getElementsByTagName('a');
    // loop through all 'a' elements
    for (i = 0; i < a.length; i++) {
        // Remove the class 'active' if it exists
        a[i].classList.remove('active')
    }
    // add 'active' classs to the element that was clicked
    elem.classList.add('active');

}

<?php
    $dbcon=mysqli_connect("localhost","root","");
    mysqli_select_db($dbcon,"travelepic");
    extract($_POST);

    $user_name=$_POST['name'];
    $user_email=$_POST['email'];
    $user_password=$_POST['password'];
    $regex = '/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/';

    if($user_name=='')
    {
        echo"<script>alert('Please enter the name')</script>";
        echo "<script>window.open('../form-register.html','_self')</script>";
        exit();
    }
    if($user_email=='')
    {
        echo"<script>alert('Please enter the email id')</script>";
        echo "<script>window.open('../form-register.html','_self')</script>";
        exit();
    }
    if (!preg_match($regex, $email))
    {
        echo"<script>alert('Please enter the valid email')</script>";
        echo "<script>window.open('../form-register.html','_self')</script>";
        exit();
    }
    if($user_password=='')
    {
        echo"<script>alert('Please enter the password')</script>";
        echo "<script>window.open('../form-register.html','_self')</script>";
        exit();
    }

    $insert_user="insert into user(username,email,password) VALUES ('$user_name','$user_email','$user_password')";
    echo $insert_user;

    if(mysqli_query($dbcon,$insert_user)){
        // echo"<script>alert('registration successfully, move to login page')</script>";
        echo "<script>window.open('../form-login.html','_self')</script>";
    }
    else
    {
        echo"<script>alert('Registration failed, user already exists')</script>";
        echo "<script>window.open('../form-register.html','_self')</script>";
    }
?>

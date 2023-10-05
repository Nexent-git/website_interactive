<?php

require_once "Mobile_Detect.php";
$detect = new Mobile_Detect;

?>
<!DOCTYPE html>
<html lang="en">

<head>


  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>Linia Super</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/style.css" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
  <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
  <link rel="manifest" href="favicon/site.webmanifest">
  <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#282828">
  <meta name="msapplication-TileColor" content="#da532c">
  <meta name="theme-color" content="#ffffff">
  <style type="text/css">
    .k strong {
      font-weight: normal !important;
    }
  </style>
  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
  <div class="container-fluid parallax">
    <div class="row intro">
      <div class="container">
        <div class="ir" id="icon"></div>
        <h1 id="h1" top="0" class="ir">
          Linia super
        </h1>
        <h2 style="margin-top: 0px;margin-bottom: 40px;">Mesmerizing color puzzles</h2>

        <?php if ($detect->isiOS()) { ?>

          <div style="">

            <a style="float: none;margin: 0 auto;" class="ir appstore" target="_blank" href="https://apps.apple.com/app/id1573761523" id="ios-button">

              <img class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniasuper/ios@2x.png" />

            </a>

          </div>

        <?php } elseif ($detect->isAndroidOS()) { ?>

          <div style="">

            <a style="float: none;margin: 0 auto;" class="ir googleplay" target="_blank" href="https://apps.apple.com/app/id1573761523" id="android-button">

              <img class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniasuper/android@2x.png" />

            </a>

          </div>

        <?php } else { ?>

          <div style="width:500px; margin:0 auto;">

            <a class="ir appstore" target="_blank" href="https://apps.apple.com/app/id1573761523" id="ios-button">

              <img class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniasuper/ios@2x.png" />

            </a>

            <a class="ir googleplay" target="_blank" href="https://play.google.com/store/apps/details?id=com.blackrobotgamesdev.linia2" id="android-button">

              <img class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniasuper/android@2x.png" />

            </a>

          </div>

        <?php } ?>

        <div class="clearfix"></div>
        <div class="row video" style="margin-top:50px">
          <div class="detail col-md-10 col-md-offset-1">
            <video width="100%" poster="https://nexentwebsites.s3.amazonaws.com/liniasuper/videoposter.jpg" controls>
              <source src="https://nexentwebsites.s3.amazonaws.com/liniasuper/medium_quality.mp4" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
        <div class="row">
          <div class="detail col-md-10 col-md-offset-1 k" style="text-align: left;">
            <h2 style="text-align: left;margin-top:60px">Game info</h2>
            <p style="text-align: left;">Linia is back and does it in style with revamped visuals and more than 100
              levels packed with original and unpredictable puzzles.<br>
              In "Linia super" - the second edition of <a target="_blank" href="http://linia.blackrobotgames.com">the
                game</a> downloaded by millions worldwide - you will once again go hunting for color
              sequences, drawing a line to create the correct connection between the different shapes on the screen.<br>
              But this time, to make it even more engaging, you will also have to keep an eye on your ink supply while you draw lines and collect the "Liniacoins" that will help you through the exciting chapters of the game.<br>
              It's easy to get carried away by this mesmerizing dance of colors that pulse, spin, hide and twirl, going
              to great lengths to avoid being caught by your line.<br>
              It will take skill, a keen eye and a sense of rhythm to get the sequence right.</p>
            <br>
            <h2 style="text-align: left;">Main features</h2>
            <p style="text-align: left;">
              <b>•</b> Original and non-linear gameplay - you decide the game path!<br>
              <b>•</b> A different graphic style for each chapter<br>
              <b>•</b> More than 100 unique and colorful levels and...<br>
              <b>•</b> ...new levels released with future updates<br>
              <b>•</b> "Go Super!" mode to play without interruption<br>
            </p>
            <br>
            <h2 style="text-align: left;">General info</h2>
            <p style="text-align: left;">
              <b>Developer:</b> Nexent<br>
              <b>Platforms:</b> <a target="_blank" href="https://apps.apple.com/app/id1573761523"><span class="glyphicon glyphicon-link"></span> iOS</a>, <a target="_blank" href="https://play.google.com/store/apps/details?id=com.blackrobotgamesdev.linia2"><span class="glyphicon glyphicon-link"></span> Android</a> <br>
              <b>Release date:</b> December 10th 2021<br>
              <b>Price:</b> Free<br>
              <b>Notes:</b> Ads and In-App Purchases<br>
              <br>
            </p>
            <h2 style="text-align: left;">About Nexent</h2>
            <p style="text-align: left;">
              At Nexent we craft mobile games for highly interactive experiences ranging from the relaxing to the challenging.<br>
<br>
The <b>Linia</b> series of mobile games is based on engaging shapes and colors.<br>
Linia Stripes is a relaxing game of identifying progressive lengths and building collections of patterns.<br>
Linia Super challenges the user with drawing lines through moving and changing shapes and objects.<br>
<br>
Founded in 2021 in Milan, Italy, by a team of passionate and experienced developers and designers, Nexent SRL is an Indie Game Studio built upon the foundation of the Blackrobot Games developer publishing games since 2016.<br>
            </p>
          </div>
        </div>
        <div class="clearfix"></div>
        <div class="row screenshots">
          <div class="detail col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 k">
            <div class="col-md-2 item" style="margin-top:10px">
              <img style="margin:0 auto" class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniasuper/sc_catchme.jpg" />
            </div>
            <div class="col-md-2 item" style="margin-top:10px">
              <img style="margin:0 auto" class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniasuper/sc_vintart.jpg" />
            </div>
            <div class="col-md-2 item" style="margin-top:10px">
              <img style="margin:0 auto" class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniasuper/sc_qubert.jpg" />
            </div>
            <div class="col-md-2 item" style="margin-top:10px">
              <img style="margin:0 auto" class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniasuper/sc_olim.jpg" />
            </div>
            <div class="col-md-2 item" style="margin-top:10px">
              <img style="margin:0 auto" class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniasuper/sc_karelia.jpg" />
            </div>
            <div class="col-md-2 item" style="margin-top:10px">
              <img style="margin:0 auto" class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniasuper/sc_gravity.jpg" />
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
        <br>

        <br>
        <div class="row">
          <h2>Media</h2>
          <p>
            <a href="https://drive.google.com/drive/folders/1egGUTXurmA-V8zyTgsNs8LJHmjLpUakQ?usp=sharing"><span class="glyphicon glyphicon-download"></span> Icon
              (0.4 MB)</a><br>
            <a href="https://drive.google.com/drive/folders/1egGUTXurmA-V8zyTgsNs8LJHmjLpUakQ?usp=sharing"><span class="glyphicon glyphicon-download"></span>
              Screenshots (43 MB)</a> <br>
            <a href="https://drive.google.com/drive/folders/1egGUTXurmA-V8zyTgsNs8LJHmjLpUakQ?usp=sharing"><span class="glyphicon glyphicon-download"></span> Promo
              video (21 MB)</a> <br>
            <a target="_blank" href="https://www.youtube.com/watch?v=TivvTn2YYGA"> <span class="glyphicon glyphicon-link"></span> YouTube video</a> <br>
          </p>
          <br>
          <h2>Contact us</h2>
          <p>
            <strong>Email:</strong> <a href="mailto:info@nexent.io">info@nexent.io</a><br>
            <strong>Social:</strong> <a target="_blank" href="http://www.twitter.com/nexent_io">Twitter</a><br>
            <strong>Web:</strong> <a target="_blank" href="https://nexent.io">nexent.io</a><br>
          </p>

        </div>
        <div class="clearfix"></div>
        <div class="iHateSpacers"></div>

        <p class="credits"><br><br><br>Linia super is designed and developed by<br><a target="_blank" href="https://nexent.io">Nexent</a><br><br>
          Linia is a trademark of Nexent SRL<br>All rights reserved.
        </p>
      </div>
    </div>
  </div>
</body>

</html>
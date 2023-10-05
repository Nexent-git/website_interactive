<?php

require_once "Mobile_Detect.php";
$detect = new Mobile_Detect;

?>

<!DOCTYPE html>
<html lang="en">

<head>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-9ZR0FLS32Y"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9ZR0FLS32Y');
</script>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>Linia Stripes</title>
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
          Linia Stripes
        </h1>

        <div style="margin:0 auto;" class="stores">

          <?php if ($detect->isiOS()) { ?>

            <div style="">

              <a style="float: none;margin: 0 auto;" class="ir appstore" target="_blank" href="https://apps.apple.com/app/id1637430004" id="ios-button">
                <img class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniastripes/ios@2x.png" />
              </a>

              <a style="float: none;margin: 20px auto;" class="ir steam" target="_blank"
              href="https://store.steampowered.com/app/2370330/Linia_Stripes/" id="steam-button">
                <img class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniastripes/steam@2x.png" />
              </a>

            </div>

          <?php } elseif ($detect->isAndroidOS()) { ?>

            <div style="">

              <a style="float: none;margin: 0 auto;" class="ir googleplay" target="_blank" href="https://play.google.com/store/apps/details?id=com.blackrobotgamesdev.stripes" id="android-button">
                <img class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniastripes/android@2x.png" />
              </a>

              <a style="float: none;margin: 20px auto;" class="ir steam" target="_blank"
              href="https://store.steampowered.com/app/2370330/Linia_Stripes/" id="steam-button">
                <img class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniastripes/steam@2x.png" />
              </a>

            </div>

          <?php } else { ?>
          <div style="width:500px; margin:0 auto;">
            <a class="ir appstore" target="_blank" href="https://apps.apple.com/app/id1637430004" id="ios-button">
              <img class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniastripes/ios@2x.png" />
            </a>

            <a class="ir googleplay" target="_blank" href="https://play.google.com/store/apps/details?id=com.blackrobotgamesdev.stripes" id="android-button">
              <img class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniastripes/android@2x.png" />
            </a>
          </div>
          
          <div class="clearfix"></div>

            <div style="margin-top:30px;">
              <iframe
                src="https://store.steampowered.com/widget/2370330/?t=Linia%20Stripes%20can%20be%20played%20on%20PC!%0AGet%20Linia%20Stripes%20on%20Steam.%20%20"
                frameborder="0" width="646" height="190"></iframe>
            </div>
          <?php } ?>
        </div>

        <div class="clearfix"></div>
        <div style="margin-top: 50px;"></div>
        <div class="row">
          <div class="detail col-md-10 col-md-offset-1 k" style="text-align: left;">
            
            <h2 style="text-align: left;margin-top:60px">GAME DESCRIPTION</h2>
            <p style="text-align: left;">
            Linia Stripes is the new compelling "clear the board" game.<br>
            Sit down, relax and collect patterns while you discover thousands of mesmerizing colorful levels!
            </p>
            
            <div class="row screenshots">
              <div class="detail col-md-12">
                <div class="col-md-2 item" style="margin-top:10px">
                  <img style="margin:0 auto" class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniastripes/store/1.jpg" />
                </div>
                <div class="col-md-2 item" style="margin-top:10px">
                  <img style="margin:0 auto" class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniastripes/store/2.jpg" />
                </div>
                <div class="col-md-2 item" style="margin-top:10px">
                  <img style="margin:0 auto" class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniastripes/store/3.jpg" />
                </div>
                <div class="col-md-2 item" style="margin-top:10px">
                  <img style="margin:0 auto" class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniastripes/store/4.jpg" />
                </div>
                <div class="col-md-2 item" style="margin-top:10px">
                  <img style="margin:0 auto" class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniastripes/store/5.jpg" />
                </div>
                <div class="col-md-2 item" style="margin-top:10px">
                  <img style="margin:0 auto" class="img-responsive" src="https://nexentwebsites.s3.amazonaws.com/liniastripes/store/6.jpg" />
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <br>



            <h2 style="text-align: left;margin-top:30px">💎 FEATURES 💎</h2>
            <p style="text-align: left;">
              <b>•</b> Easy to play - relax and enjoy<br>
              <b>•</b> Progress - collect patterns and unlock new levels and challenges<br>
              <b>•</b> Quick sessions - play as much as you want<br>
              <b>•</b> Shuffle - switch to another board instantly, play what you like<br>
            </p>
            <h2 style="text-align: left;margin-top:30px">🎮 HOW TO PLAY 🎮</h2>
            <p style="text-align: left;">
              <b>•</b> Find the shortest stripes on the board<br>
              <b>•</b> Tap to clear them<br>
              <b>•</b> Go on until you clear the board<br>
            </p>
            <h2 style="text-align: left;margin-top:30px">🏆 WHY LINIA STRIPES? 🏆</h2>
            <p style="text-align: left;">
              <b>•</b> Rewarding - level up and collect new incredible patterns<br>
              <b>•</b> Relaxing - take your time and relax, nobody's pressuring you<br>
              <b>•</b> Gratifying - clearing the board has never been so satisfying<br>
            </p>
            <h2 style="text-align: left;margin-top:30px">💡 CREATE UNIQUE WALLPAPERS 💡</h2>
            <p style="text-align: left;">
              <b>•</b> As you play and win, you'll be able to create your exclusive and mesmerizing wallpapers - try this feature!<br>
              <b>•</b> Collect new patterns to create more unique wallpapers<br>
            </p>

            <br>
            <p>-----</p>
            <br>
            
            <h2 style="text-align: left;">General info</h2>
            <p style="text-align: left;">
              <b>Developer:</b> Nexent<br>
              <b>Stores:</b> <a target="_blank" href="https://apps.apple.com/app/id1637430004"><span class="glyphicon glyphicon-link"></span> iOS</a>, <a target="_blank" href="https://play.google.com/store/apps/details?id=com.blackrobotgamesdev.stripes"><span class="glyphicon glyphicon-link"></span> Android</a> <br>
              <b>Release date:</b> October 13th 2022<br>
              <b>Price:</b> Free<br>
              <b>Notes:</b> Ads and In-App Purchases<br>
              <b>Media:</b> <a href="https://drive.google.com/drive/folders/1pVJ3Mn71J7BM1eRfvyvLm7W9f7Swcw3S?usp=sharing"><span class="glyphicon glyphicon-link"></span> Press Release Download</a>
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

        <br>
        <div class="row">
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

        <p class="credits"><br><br><br>Linia Stripes is designed and developed by<br><a target="_blank" href="https://nexent.io">Nexent</a><br><br>
          Linia is a trademark of Nexent SRL<br>All rights reserved.
        </p>
      </div>
    </div>
  </div>
</body>

</html>
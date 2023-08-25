'use strict';

// variables for navbar menu toggle
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');

// variables for navbar search toggle
const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navbarSearchBtn = document.querySelector('.navbar-search-btn');


// navbar menu toggle function
function navIsActive() {
  header.classList.toggle('active');
  nav.classList.toggle('active');
  navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click', navIsActive);



// navbar search toggle function
const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);




// Episode vidéo
$(document).ready(function(){
  var episodes = [
    {
      lecteur: '1',
      videos: [
        'https://www.youtube.com/watch?v=pgONuDKywzg&ab_channel=LeBouseuh',
        'https://sendvid.com/embed/gno01lx6',
        'https://sendvid.com/embed/tv6s7ntg',
        'https://sendvid.com/embed/s4tdnpnf',
        'https://sendvid.com/embed/idpag4yf',
        'https://sendvid.com/embed/vhv5x2r3',
        'https://sendvid.com/embed/rr8ubyff',
        'https://sendvid.com/embed/6hapgtxg',
        'https://sendvid.com/embed/5ng4yck5',
        'https://sendvid.com/embed/oyl9atdw',
        'https://sendvid.com/embed/u0zfgs37',
        'https://sendvid.com/embed/7eaha67y',
        'https://sendvid.com/embed/qhswdig3',
        'https://sendvid.com/embed/6ou56d82',
        'https://sendvid.com/embed/e83p1217',
        'https://sendvid.com/embed/p7t1gxl8',
        'https://sendvid.com/embed/x1b5rhlw',
        'https://sendvid.com/embed/ldq43gli',
        'https://sendvid.com/embed/tjwah76r',
        'https://sendvid.com/embed/j0cuegtm',
        'https://sendvid.com/embed/9d8ijdw7',
        'https://sendvid.com/embed/2w84wjy5',
        'https://sendvid.com/embed/jf1x5qda',
        'https://sendvid.com/embed/ppg8028v',
      ]
    },
    {
      lecteur: '2',
      videos: [
        'https://video.sibnet.ru/shell.php?videoid=4934440',
        'https://video.sibnet.ru/shell.php?videoid=4942630',
        'https://video.sibnet.ru/shell.php?videoid=4950336',
        'https://video.sibnet.ru/shell.php?videoid=4957371',
        'https://video.sibnet.ru/shell.php?videoid=4963956',
        'https://video.sibnet.ru/shell.php?videoid=4969663',
        'https://video.sibnet.ru/shell.php?videoid=4975570',
        'https://video.sibnet.ru/shell.php?videoid=4981532',
        'https://video.sibnet.ru/shell.php?videoid=4989599',
        'https://video.sibnet.ru/shell.php?videoid=4997732',
        'https://video.sibnet.ru/shell.php?videoid=5009747',
        'https://video.sibnet.ru/shell.php?videoid=5009748',
        'https://video.sibnet.ru/shell.php?videoid=5025087',
        'https://video.sibnet.ru/shell.php?videoid=5031877',
        'https://video.sibnet.ru/shell.php?videoid=5039812',
        'https://video.sibnet.ru/shell.php?videoid=5049389',
        'https://video.sibnet.ru/shell.php?videoid=5058955',
        'https://video.sibnet.ru/shell.php?videoid=5067705',
        'https://video.sibnet.ru/shell.php?videoid=5073670',
        'https://video.sibnet.ru/shell.php?videoid=5079736',
        'https://video.sibnet.ru/shell.php?videoid=5087554',
        'https://video.sibnet.ru/shell.php?videoid=5093793',
        'https://video.sibnet.ru/shell.php?videoid=5100125',
        'https://video.sibnet.ru/shell.php?videoid=5106965',
      ]
    },
    {
      lecteur: '3',
      videos: [
        'https://www.myvi.tv/embed/mr5q56n5yb4w98a587jgkczgqc',
        'https://www.myvi.tv/embed/6by5sneyarhwumd8u4nckqf75c',
        'https://www.myvi.tv/embed/gf9r4imgmijriq81cdwqimgieh',
        'https://www.myvi.tv/embed/u4wsdsccnt3rbcembgnzwcybyh',
        'https://www.myvi.tv/embed/pwyfjgfyz7ewiyecm9inwbn71h',
        'https://www.myvi.tv/embed/wncfcmyuyxnr3gnitzjg1pemtc',
        'https://www.myvi.tv/embed/cntmwa5ieoerjbr9wko3fuwzto',
        'https://www.myvi.tv/embed/pz1ex1sz7wewbn3wf1ynzpjcqe',
        'https://www.myvi.tv/embed/trzqg1gneipwdxhf1piwosbgih',
        'https://www.myvi.tv/embed/x8m5ehoj68sr7jinn58siyqnha',
        'https://www.myvi.tv/embed/foaorimkoc9w9kdkx6ja8cyjuo',
        'https://www.myvi.tv/embed/qcxofcw4sqwrdbrqw436cnt6jo',
        'https://www.myvi.tv/embed/ksrcwy5xsp1w8cw1sfegbyq56w',
        'https://www.myvi.tv/embed/1gg8ohum57bwxfuzd13ddrt6rr',
        'https://www.myvi.tv/embed/u9bjo93qsthrdgkjgumk4kpx4e',
        'https://www.myvi.tv/embed/q1ine6w67xbrmrihk3zqireeur',
        'https://www.myvi.tv/embed/rsjq58g6txew7ybmey1ecut49w',
        'https://www.myvi.tv/embed/y3wktu6ioyqw5knutwxz8r5k8r',
        'https://www.myvi.tv/embed/s3rkmf8kbm3rxxb3muud1h595h',
        'https://www.myvi.tv/embed/wepdmbc1dukw9fx691cme9k1io',
        'https://www.myvi.tv/embed/crfjme6cq11wxbqkptcqm5ssmc',
        'https://www.myvi.tv/embed/rn9wai897ciwup4p1tb3id4tqc',
        'https://www.myvi.tv/embed/gh8om9ewednrfg5n7e76cb4fna',
        'https://www.myvi.tv/embed/98jnftcqzo3r5xf8nhe715ag4h',
      ]
    }
    // Ajoutez d'autres lecteurs et leurs vidéos ici
  ];

  var currentEpisode = 1;

  function updateVideo() {
    var episode = $('#selection_EP').val();
    var lecteur = $('#selection_LECTEUR').val();
   
    if (episode && lecteur) {
      var videoLink = episodes.find(function(ep) {
        return ep.lecteur === lecteur;
      }).videos[episode - 1];
     
      if (videoLink) {
        $('#video_EP').attr('src', videoLink);
      }
      else {
        $('#videoContainer').html('Lecteur ou épisode non valide.');
      }
    }
  }

  $('#selection_EP, #selection_LECTEUR').change(function(){
    updateVideo();
  });

  $('#PRECEDENT').click(function() {
    if (currentEpisode > 1) {
      currentEpisode--;
      $('#selection_EP').val(currentEpisode);
      updateVideo();
    }
  });

  $('#SUIVANT').click(function() {
    var totalEpisodes = $('#selection_EP option').length;
    if (currentEpisode < totalEpisodes) {
      currentEpisode++;
      $('#selection_EP').val(currentEpisode);
      updateVideo();
    }
  });

  // Code pour charger la première vidéo par défaut
  var defaultEpisode = '1';
  var defaultLecteur = '1';

  $('#selection_EP').val(defaultEpisode);
  $('#selection_LECTEUR').val(defaultLecteur);
  updateVideo();
});

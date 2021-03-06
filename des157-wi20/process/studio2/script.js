(function(){
  'use strict'

  const notebookText = document.getElementById('notebook-text');
  const sunglassesText = document.getElementById('sunglasses-text');
  const remoteText = document.getElementById('remote-text');
  notebookText.setAttribute("class", "invisible");
  sunglassesText.setAttribute("class", "invisible");
  remoteText.setAttribute("class", "invisible");

  const notebook = document.getElementById('notebook');
  const notebookbg = document.getElementById('notebook-bg');
  const notebookopen = document.getElementById('notebook-open')
  notebook.addEventListener("click", function(event) {
    event.preventDefault();
    notebookText.innerHTML = `
    <h2>Notebook</h2>
    <p>Whether that be for important notes or just doodling ideas down, I bring
     this notebook with me everywhere I go.</p>`;
    notebookText.setAttribute("class", "visible");

    notebookbg.style.backgroundColor = "#96B8BF";
    sunglassesbg.style.backgroundColor = "#CED3D3";
    remotebg.style.backgroundColor = "#CED3D3";

    remoteOn.src='images/remote.png';
    notebookopen.src='images/notebook-open.png';
    notebookopen.height = '200';
    sunglassesOn.src='images/sunglasses.png';
  });


  const sunglasses = document.getElementById('sunglasses');
  const sunglassesbg = document.getElementById('sunglasses-bg');
  const sunglassesOn = document.getElementById('sunglasses-img');
  sunglasses.addEventListener("click", function(event) {
    event.preventDefault();
    sunglassesText.innerHTML = `
    <h2>Sunglasses</h2>
    <p>A free pair of white sunglasses from Peet’s coffee. A necessity to protect
    my eyes from the sun. Too many studnets don't wear sunglasses.</p>`;
    sunglassesText.setAttribute("class", "visible");

    notebookbg.style.backgroundColor = "#CED3D3";
    sunglassesbg.style.backgroundColor = "#96B8BF";
    remotebg.style.backgroundColor = "#CED3D3";

    notebookopen.src='images/notebook.png';
    sunglassesOn.src='images/sunglasses-on.png';
  });



  const remote = document.getElementById('remote');
  const remotebg = document.getElementById('remote-bg');
  const remoteOn = document.getElementById('remote-img');

  remote.addEventListener("click", function(event) {
    event.preventDefault();
    remoteText.innerHTML = `
    <h2>Boosted Board Remote</h2>
    <p>Needed to control the speed of my Boosted Board. I can’t
    get around campus without this..</p>`;
    remoteText.setAttribute("class", "visible");

    notebookbg.style.backgroundColor = "#CED3D3";
    sunglassesbg.style.backgroundColor = "#CED3D3";
    remotebg.style.backgroundColor = "#96B8BF";

    notebookopen.src='images/notebook.png';
    remoteOn.src='images/remote-on.png';
    sunglassesOn.src='images/sunglasses.png';
  });

}() );

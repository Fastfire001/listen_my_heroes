window.onload = function () {
    //My function
    function displayDescription(heroeDescription) {
        var descriptionBlock = document.querySelector('p.description');
        descriptionBlock.innerHTML = heroeDescription;
        document.querySelector('div.description').classList.remove('hide');
    }
    //My variable
    var Vash = document.querySelector('img[alt="Vash"]');
    var vashDescription = "Vash the Stampede ou le typhon humanoïde est considéré comme une catastrophe naturelle au même titre qu'un séisme";
    var Merly = document.querySelector('img[alt="Merly"');
    var merlyDescription = "Merly Stryfe travail pour la compagnie d'assurance Bernardeli qui est chargée de surveiller Vash";
    var Wolfwood = document.querySelector('img[alt="Wolfwood"]');
    var wolfwoodDescription = "Nicholas D. Wolfwood, le compagnon de Vash??";
    var Millie = document.querySelector('img[alt="Millie"]');
    var millieDescription = "Milly Thompson est l'assistante de Millie, elle est plus grand et plus forte que la plupart des hommes";
    var btnHideDescription = document.querySelector('.hideDescription');
    var btnShowOnlyWoman = document.querySelector('button.woman');
    var btnShowOnlyMan = document.querySelector('button.man');
    var btnShowAllHeroes = document.querySelector('button.allHeroes');
    //My Js
    Vash.onclick = function () {
        displayDescription(vashDescription);
    };
    Merly.onclick = function () {
        displayDescription(merlyDescription);
    };
    Wolfwood.onclick = function () {
        displayDescription(wolfwoodDescription);
    };
    Millie.onclick = function () {
        displayDescription(millieDescription);
    };
    btnHideDescription.onclick = function () {
        document.querySelector('div.description').classList.add('hide');
    };
    btnShowOnlyWoman.onclick = function () {
        Vash.classList.add('hide');
        Wolfwood.classList.add('hide');
        Merly.classList.remove('hide');
        Millie.classList.remove('hide');
    };
    btnShowOnlyMan.onclick = function () {
        Vash.classList.remove('hide');
        Wolfwood.classList.remove('hide');
        Merly.classList.add('hide');
        Millie.classList.add('hide');
    };
    btnShowAllHeroes.onclick = function () {
        Vash.classList.remove('hide');
        Wolfwood.classList.remove('hide');
        Merly.classList.remove('hide');
        Millie.classList.remove('hide');
    };
};
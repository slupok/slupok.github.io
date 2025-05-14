//----------------
// Preview Subject
//----------

var subjectTemplate = Handlebars.compile(previewSubjectSource());

function previewSubjectSource()
{
    var html = '<div class="subject">'
    html +=     '<img class="subject-image-preview" src={{image}}>'
    html +=     '<h3>{{title}}</h3>'
    html +=     '<p style="white-space: pre-line">'
    html +=         '{{description}}'
    html +=     '</p>'
    html +=     '<button class="subject-info" data-test={{attribute}}>Подробнее</button>'
    html +=    '</div>'

    return html
}

function generatePreviewSubject(parent, subject) {
    let html = subjectTemplate({
        attribute: subject.attribute,
        title: subject.title,
        image: subject.image,
        description: subject.description
    });
    parent.innerHTML += html
}

function populateSubject(parent, title, description)
{
    let html = subjectTemplate({
        title: title,
        description: description
    });
    parent.innerHTML += html
}


//----------------
// Modal Subject
//----------



var subjectInfoTemplate = Handlebars.compile(SubjectInfoSource());
function SubjectInfoSource() {
    //var html =  '<dialog id="subject-modal" style="padding: 0">'
    //html +=      '<div id="modal-subject-box" style="padding: 1rem">'
    var html =           '<div>'
    html +=                 '<h3>{{title}}</h3>'
    html +=                 '<p style="white-space: pre-line">{{description}}</p>'
    html +=                 '<h4>Материалы для изучения</h4>'
    html +=                 '<ul class="subject-resources">'
    html +=                     '{{#each resources}}'
    html +=                         '<li>{{{this}}}</li>'
    html +=                     '{{/each}}'
    html +=                 '</ul>'
    html +=             '</div>'
    html +=             '<button onclick="onCloseModal()" id="close-modal-btn">Close</button>'
    //html +=         '</div>'
    //html +=     '</dialog>'
    return html
}

function generateSubjectInfo(parent, subject) {
    let html = subjectInfoTemplate({
        title: subject.title,
        description: subject.description,
        resources: subject.resources
    });
    parent.innerHTML = html
}
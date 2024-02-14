$(()=>{

    $('.btn-add').click(()=>{



        let el = `
            <div class="annotation-single">
                <textarea placeholder="Sua nova anotação"></textarea>
            </div>
        `;

        $('.container-annotations').append(el);
        $('div.annotation-single').last().hide().fadeIn();

        var date = new Date();
        var hh = date.getHours();
        var mm = date.getMinutes();

        var finalTime = hh + ':' + mm;

        var textArea = $('div.annotation-single').last().find('textarea');

        textArea.html('[' + finalTime + '] Sua nova anotação...')

    })

})
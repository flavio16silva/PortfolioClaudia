// Aguarda o evento de carregamento do DOM para garantir que o documento HTML tenha sido completamente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
  // Chama a função contagemregressiva quando o DOM estiver carregado
      contagemregressiva('.contagem-regressiva-um');
  });
  

// Declaração de uma função autoinvocada que recebe um objeto exports como parâmetro
  (function (exports) {
    'use strict';

    var contagemregressiva;

    contagemregressiva = function (elt, args) {
        var parameters = {
                year: new Date().getFullYear() + 1,
                month: 0, // Janeiro
                day: 1, // Último dia do ano
                hours: 0, // 23 horas
                minutes: 0, // 59 minutos
                seconds: 0, // 59 segundos
                words: {
                    days: 'day',
                    hours: 'hour',
                    minutes: 'minute',
                    seconds: 'second',
                    pluralLetter: 's'
                },
                plural: true,
                inline: false,
                enableUtc: true,
                onEnd: function () {
                    return;
                },
                refresh: 1000,
                inlineClass: 'contagem-regressiva-inline',
                sectionClass: 'simples-sessao',
                amountClass: 'simples-quantidade',
                wordClass: 'simples-palavra',
                zeroPad: false
            },
            interval,
            targetDate,
            now,
            nowUtc,
            secondsLeft,
            days,
            hours,
            minutes,
            seconds,
            cd = document.querySelectorAll(elt);

        Array.prototype.forEach.call(cd, function (contagem) {
            var refresh = function () {
                now = new Date();
                if (parameters.enableUtc) {
                    nowUtc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
                        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
                    secondsLeft = (targetDate.getTime() - nowUtc.getTime()) / 1000;

                } else {
                    secondsLeft = (targetDate.getTime() - now.getTime()) / 1000;
                }

                if (secondsLeft > 0) {
                    days = Math.floor(secondsLeft / 86400);
                    secondsLeft -= days * 86400;

                    hours = Math.floor(secondsLeft / 3600);
                    secondsLeft -= hours * 3600;

                    minutes = Math.floor(secondsLeft / 60);
                    seconds = Math.floor(secondsLeft % 60);
                } else {
                    days = 0;
                    hours = 0;
                    minutes = 0;
                    seconds = 0;
                    window.clearInterval(interval);
                    parameters.onEnd();
                }

                if (parameters.plural) {
                    var dayWord = days > 1
                        ? parameters.words.days + parameters.words.pluralLetter
                        : parameters.words.days;

                    var hourWord = hours > 1
                        ? parameters.words.hours + parameters.words.pluralLetter
                        : parameters.words.hours;

                    var minuteWord = minutes > 1
                        ? parameters.words.minutes + parameters.words.pluralLetter
                        : parameters.words.minutes;

                    var secondWord = seconds > 1
                        ? parameters.words.seconds + parameters.words.pluralLetter
                        : parameters.words.seconds;
                } else {
                    var dayWord = parameters.words.days;
                    var hourWord = parameters.words.hours;
                    var minuteWord = parameters.words.minutes;
                    var secondWord = parameters.words.seconds;
                }

                if (parameters.inline) {
                    contagem.innerHTML =
                        days + ' ' + dayWord + ', ' +
                        hours + ' ' + hourWord + ', ' +
                        minutes + ' ' + minuteWord + ', ' +
                        seconds + ' ' + secondWord + '.';
                } else {
                    contagem.querySelector('.simples-dia .simples-quantidade').textContent = (parameters.zeroPad && days.toString().length < 2 ? '0' : '') + days;
                    contagem.querySelector('.simples-dia .simples-palavra').textContent = dayWord;

                    contagem.querySelector('.simples-hora .simples-quantidade').textContent = (parameters.zeroPad && hours.toString().length < 2 ? '0' : '') + hours;
                    contagem.querySelector('.simples-hora .simples-palavra').textContent = hourWord;

                    contagem.querySelector('.simples-minuto .simples-quantidade').textContent = (parameters.zeroPad && minutes.toString().length < 2 ? '0' : '') + minutes;
                    contagem.querySelector('.simples-minuto .simples-palavra').textContent = minuteWord;

                    contagem.querySelector('.simples-segundo .simples-quantidade').textContent = (parameters.zeroPad && seconds.toString().length < 2 ? '0' : '') + seconds;
                    contagem.querySelector('.simples-segundo .simples-palavra').textContent = secondWord;
                }
            };

            // Obtenha a data atual
            var now = new Date();

            // Obtenha o próximo ano
            var currentYear = now.getFullYear();
            var nextYear = currentYear + 1;

            // Crie uma data para o último segundo do último dia do ano atual
            var endOfYear = new Date(currentYear, 11, 31, 23, 59, 59); // Dezembro é representado como mês 11

            // Calcule a diferença em milissegundos entre a data atual e o final do ano
            var difference = endOfYear.getTime() - now.getTime();

            // Converta a diferença de milissegundos para dias, horas, minutos e segundos
            var days = Math.floor(difference / (1000 * 60 * 60 * 24));
            var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Configura a data alvo como o final do ano atual
            targetDate = endOfYear;

            // Refresh imediatamente para evitar um Flash de Conteúdo Não Estilizado
            refresh();
            interval = window.setInterval(refresh, parameters.refresh);
        });
    };

    exports.contagemregressiva = contagemregressiva;
})(window);




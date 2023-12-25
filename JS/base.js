const increase = document.querySelector('button.btn_increase');
increase.addEventListener('click', IncreaseNumber);

const reset = document.querySelector('button.btn_reset');
reset.addEventListener('click', ResetNumber);

const decrease = document.querySelector('button.btn_decrease');
decrease.addEventListener('click', DecreaseNumber);

let number = 0;

function UpdateCounterDisplay()
{
    GetCounterText().innerHTML = number;
    SetCounterColor();
}

function GetCounterText()
{
    return document.querySelector('p.counterText');
}

function SetCounterColor()
{
    const counterText = GetCounterText();

    if (number > 0)
    {
        counterText.style.color = 'green';
    }
    else if (number < 0)
    {
        counterText.style.color = 'red';
    }
    else
    {
        counterText.style.color = 'black';
    }
}

function IncreaseNumber()
{
    number++;
    UpdateCounterDisplay();
}

function ResetNumber()
{
    number = 0;
    UpdateCounterDisplay();
}

function DecreaseNumber()
{
    number--;
    UpdateCounterDisplay();
}
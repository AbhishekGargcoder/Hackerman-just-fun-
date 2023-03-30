let body = document.getElementsByClassName("body")[0];
let hack = document.getElementById("hack");
hack.value = "";
console.log(hack);
let btn = document.getElementById("hacked");
let p = document.getElementById("demo");
console.log(btn);
const run = async () => {
    let a = hack.value;
    if (a == "")
        p.innerHTML = "Enter your Email-id..."
    else {
        let i = 0, c;
        console.log(hack.value.length);
        while (i < hack.value.length) {
            c = hack.value[i++];
            if (c == '@') {
                btn.removeEventListener("click", run)
                document.body.style.background=  'url("https://media.giphy.com/media/V4NSR1NG2p0KeJJyr5/giphy.gif")';
            let arr = [` Searching ${hack.value}...`,
                    "Initialising ☠️ Hack program...",
                    `Hacking  ${hack.value}'s username...`,
                    "Username found...☠️",
                    "Connecting to Instagram...",
                    "☠️ ☠️",
                    "Congratualations, you are hacked!! ☠️ "
                ];
                var audio = new Audio("Emergency alert audio.mp3");
                console.log(arr);
                const data1 = async (d) => {
                    return new Promise((resolve, reject) => {
                        audio.play();
                        setTimeout(() => {
                            resolve(d)
                        }, 3000)
                    })
                }
                const data2 = async (d) => {
                    return new Promise((resolve, reject) => {
                        audio.play();
                        setTimeout(() => {
                            resolve(d)
                        }, 4000)
                    })
                }
                let  fun = async () => {
                    console.log(arr);
                    for (let i of arr) {
                        if (p.textContent != "Username found : Abhishek gupta" && p.textContent != "Connecting to Instagram...") {
                            p.innerHTML = await data1(i);
                            body.classList[0]
                        }
                        else
                            p.innerHTML = await data2(i);
                        console.log(i);
                    }
                    alert("Virus installing...")
                }
                fun();  
                break;
            }
        }
        if(i == hack.value.length) p.innerHTML = "Invalid Email-id"
    }
}
// btn.addEventListener("keypress",run);

let clickevent = btn.addEventListener("click",run);
// run();

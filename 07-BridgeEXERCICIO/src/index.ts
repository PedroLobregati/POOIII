import IConsole from "./platform/IConsole";
import Playstation from "./platform/Playstation";
import Xbox from "./platform/Xbox";
import AdvancedPlay from "./play/AdvancedPlay";
import Play from "./play/Play";

function startPlaying(console : IConsole){
    const play = new Play(console);
    play.playing();
    play.result();
}

function startAdvancedPlay(console : IConsole){
    const play = new AdvancedPlay(console);
    play.playing();
    play.result();
    play.challenge();
}

startPlaying(new Xbox());
startAdvancedPlay(new Playstation());

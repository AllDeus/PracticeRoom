$("#Violin").click(function () {
    $("#chromButtons").hide()
    $("#violinButtons").show()
    const audioContext = new window.AudioContext();
    const sourceAudioNode = audioContext.createOscillator();
    sourceAudioNode.type = 'triangle';
    sourceAudioNode.connect(audioContext.destination);
    sourceAudioNode.start();
    sourceAudioNode.frequency.value = 0
    $("#vC").click(function () {
        sourceAudioNode.frequency.value = 130.81
    })
    $("#vG").click(function () {
        sourceAudioNode.frequency.value = 196
    })
    $("#vD").click(function () {
        sourceAudioNode.frequency.value = 293.66
    })
    $("#vA").click(function () {
        sourceAudioNode.frequency.value = 440
    })
    $("#vE").click(function () {
        sourceAudioNode.frequency.value = 659.25
    })
    $("#vStop").click(function () {
        sourceAudioNode.frequency.value = 0
    })
})

$("#Chrom").click(function () {
    $("#violinButtons").hide()
    $("#chromButtons").show()
    const audioContext = new window.AudioContext();
    const sourceAudioNode = audioContext.createOscillator();
    sourceAudioNode.type = 'triangle';
    sourceAudioNode.connect(audioContext.destination);
    sourceAudioNode.frequency.value = 0
        sourceAudioNode.start();
    $("#btnA").click(function () {
        sourceAudioNode.frequency.value = 220
    })
    $("#btnAShrp").click(function () {
        sourceAudioNode.frequency.value = 233.08
    })
    $("#btnB").click(function () {
        sourceAudioNode.frequency.value = 246.94
    })
    $("#btnC").click(function () {
        sourceAudioNode.frequency.value = 261.63
    })
    $("#btnCShrp").click(function () {
        sourceAudioNode.frequency.value = 277.18
    })
    $("#btnD").click(function () {
        sourceAudioNode.frequency.value = 293.66
    })
    $("#btnDShrp").click(function () {
        sourceAudioNode.frequency.value = 311.13
    })
    $("#btnE").click(function () {
        sourceAudioNode.frequency.value = 329.63
    })
    $("#btnF").click(function () {
        sourceAudioNode.frequency.value = 349.23
    })
    $("#btnFShrp").click(function () {
        sourceAudioNode.frequency.value = 369.99
    })
    $("#btnG").click(function () {
        sourceAudioNode.frequency.value = 392.00
    })
    $("#btnGShrp").click(function () {
        sourceAudioNode.frequency.value = 415.30
    })
    $("#cStop").click(function () {
        sourceAudioNode.frequency.value = 0
    })
})

$("#violinButtons").hide()
$("#chromButtons").hide()
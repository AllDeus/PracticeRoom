$("#violinButtons").hide()
$("#chromButtons").hide()

$("#Violin").click(function () {
    $("#chromButtons").hide()
    $("#violinButtons").show()
    const audioContext = new window.AudioContext();
    const sourceAudioNode = audioContext.createOscillator();
    sourceAudioNode.connect(audioContext.destination);
    $("#vC").click(function () {
        sourceAudioNode.frequency.value = 130.81
        sourceAudioNode.start();
    })
    $("#vG").click(function () {
        sourceAudioNode.frequency.value = 196
        sourceAudioNode.start();
    })
    $("#vD").click(function () {
        sourceAudioNode.frequency.value = 293.66
        sourceAudioNode.start();
    })
    $("#vA").click(function () {
        sourceAudioNode.frequency.value = 440
        sourceAudioNode.start();
    })
    $("#vE").click(function () {
        sourceAudioNode.frequency.value = 659.25
        sourceAudioNode.start();
    })
    $("#vStop").click(function () {
        sourceAudioNode.frequency.value = 0
        sourceAudioNode.start();
    })
})

$("#Chrom").click(function () {
    $("#violinButtons").hide()
    $("#chromButtons").show()
    const audioContext = new window.AudioContext();
    const sourceAudioNode = audioContext.createOscillator();
    sourceAudioNode.connect(audioContext.destination);
    $("#btnA").click(function () {
        sourceAudioNode.frequency.value = 220
        sourceAudioNode.start();
    })
    $("#btnAShrp").click(function () {
        sourceAudioNode.frequency.value = 233.08
        sourceAudioNode.start();
    })
    $("#btnB").click(function () {
        sourceAudioNode.frequency.value = 246.94
        sourceAudioNode.start();
    })
    $("#btnC").click(function () {
        sourceAudioNode.frequency.value = 261.63
        sourceAudioNode.start();
    })
    $("#btnCShrp").click(function () {
        sourceAudioNode.frequency.value = 277.18
        sourceAudioNode.start();
    })
    $("#btnD").click(function () {
        sourceAudioNode.frequency.value = 293.66
        sourceAudioNode.start();
    })
    $("#btnDShrp").click(function () {
        sourceAudioNode.frequency.value = 311.13
        sourceAudioNode.start();
    })
    $("#btnE").click(function () {
        sourceAudioNode.frequency.value = 329.63
        sourceAudioNode.start();
    })
    $("#btnF").click(function () {
        sourceAudioNode.frequency.value = 349.23
        sourceAudioNode.start();
    })
    $("#btnFShrp").click(function () {
        sourceAudioNode.frequency.value = 369.99
        sourceAudioNode.start();
    })
    $("#btnG").click(function () {
        sourceAudioNode.frequency.value = 392.00
        sourceAudioNode.start();
    })
    $("#btnGShrp").click(function () {
        sourceAudioNode.frequency.value = 415.30
        sourceAudioNode.start();
    })
    $("#cStop").click(function () {
        sourceAudioNode.frequency.value = 0
        sourceAudioNode.start();
    })
})
let N = 0
while (!(input.buttonIsPressed(Button.B))) {
    if (input.buttonIsPressed(Button.A)) {
        N += 1
        if (N == 3) {
            N = 1
        }
        if (N == 1) {
            basic.showIcon(IconNames.Happy)
        } else {
            if (N == 2) {
                basic.showIcon(IconNames.Sad)
            } else {
                basic.showIcon(IconNames.Asleep)
            }
        }
    }
}
basic.showString("votre humeur")
basic.showNumber(N)

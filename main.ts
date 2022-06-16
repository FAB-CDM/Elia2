namespace SpriteKind {
    export const moneda = SpriteKind.create()
    export const guanyar = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`portaTile`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (laia.vy == 0) {
        laia.vy = -100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.moneda, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let calavera: Sprite = null
let moneda2: Sprite = null
let laia: Sprite = null
scene.setBackgroundImage(img`
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccbdddddddddddddddddccddddddddccccccccccccbdddddddbcbdddddddbccddddddddcccccdddddddddcccccdddddddddcccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb1111111111111111dcb11111111bcccccccccccd1111111dcd1111111dcb11111111bccccd11111111bcccb11111111dcccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb1111111111111111dcb11111111bcccccccccccd1111d11dcd1111111dcb11111111bcccb111dd1111bcccb111111111bccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb1111111111111111dcb11111111bcccccccccccd1111111dcd1111111dcb11111111bcccb111d11d11dcccd111111111bccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb111111111111d111dcb11111111bcccccccccccd1111111dcd1111111bcb11111111bcccb11db11111dcccd111111111bccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb1111111111d11111dcb11111111bcccccccccccd1111111dcd1111111bcb11111111bcccb11bdddd111bcb1111111111bccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb11111d111d111111dcb11111111bcccccccccccd1111111dcd1111111bcb11111111bcccb1111dcbbd1bcb1111111111bccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb1111111111111111dcb11111111bcccccccccccddd11111dcd1111111bcb11111111bcccd1111111111dcb1111111111dccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb11111d11bbbbbbbbbcb11111111bcccccccccccd1111111dcd1111111bcb11111111bcccd11111bdb11dcd1111111111dccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb11111111bcccccccccb11111111bcccccccccccd11111d1dcd1111111bcc11111111bcccd11111d1d11dcd1111111111dccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb11111111bcccccccccb11111111bcccccccccccd1111dbddcd1111111bcb11111111bcccd1111111d111b11111111111dccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb11111111bbbbbbbbccb11111111bcccccccccccd1111bcddcd1111111bcb11111111bcccd11111d11111d11111111111dccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb111d11111111111bccb11111111bcccccccccccd1111dbddcd1111111bcb11111111bcccd11111111111d11111111111dccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb111dd1111111111dccb11111111bcccccccccccd1111dd1dcd1111111bcb11111111bccbdd11111111111111111111111bcccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb111111111111111dccb11111111bcccccccccccd1111d11dcd1111111bcb11111111cccb1d11111111111111111111111bcccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb111111111111111dccb11111111bcccccccccccd1111111dcd1111111bcb11111111cccb1111111111111111111111111bcccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb111111111111111dccb11111111bcccccccccccd1111111dcd1111111bcb11111111bccb1111111111111111111111111bcccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb111111111111111dccb11111111bcccccccccccd1111111dcd1111111bcb11111111bccb1111111111111111111111111dcccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccc111111111111111dccb11111111bcccccccccccd1111111dcd1dd1111bcb11111111bccd11111111111111111111111d1dcccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccc11111111dddddddbccb11111111bccccccccbbbd1111111dcddb111b1bcb11111111bced1111111111111111111111111dcccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb11111111beccccccccb11111111bcccccbbbbbbd1111111dcd11111b1bcb11111111beed1111d11111111111111111111dccccccccccccccccfccccccccccccccc
    fcccccccccccccccccccccccccccb11111111beeeeeeeeeb11111111bbbbbbbbbbbbd1111111dcd1111111bcc11111111beed1111111111111111111111111dccccccccccfccccccccccccccccccccc
    ccccccccccccccccccccccccccccb11111111beeeeeeeeeb11111111bbbbbbbbbbbbd1111111dbd1111d11bcc11111111beed1111d11111111111111111111dccccfccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccb11111111beeeeeeeeeb11111111bbbbbbbbbbbbd1111111ded11111d1bcb11111111beed11111111111111111111111111bccccccccccccccccccccccccccccccc
    eeccccccccccccccccecccccccccb11111111beeeeeeeeeb11111111beeeebbbbeeed1111111dcd1111111bcb11111111beb111111111111111111111111111beecccccceeeeecccccccccccccccccc
    eeeeccccccccccccceeeeeecccccb11111111beeeeeeeeeb11111111beeeeeeeeeeed1111111ded1111111bcb11111111beb11d111111111111111111111111beeecccceeeeeeeeccccccccccccceee
    eeeeeccccccccccceeeeeeeeeeeeb1111111111111111deb111111111111111111ded1111111ded111111111111111111beb111111111111111111111111111deeecceeeeeeeeeeeeecccccccccceee
    eeeeeeeccccccccceeeeeeeeeeeeb1111111111111111deb11111111ddbddbdd11ded1111111ded11111111111111dbddeeb11111111d111111111d11111111deeeccccceeeeeeeeeecccccccccceee
    eeebeebecccccceebbeebbbbeeeeb1111111111111111dbb111111d1111111dd11ded1111111ded11111111111111111dbbd11111111d111111111dd1111111decccccccceeebbbeeeecccccccbeeeb
    eeebeebbccccccbbbbbbbbbbeebbb1111111111111111dbb11111111111dddbbb1dbd1111111dbb11111111111111111dbbd1111111dd111111111dd1111111dccccccccccccebbbbbbbccccccbeeeb
    ccebbbbbcccccbbbbeecccbcccbcb1111111111111111dbb1111111111111bbbb1dbd11111d1dbbd1111111111111111dddd1111111db111111111bd1111111dccccccccccccccbbbbbbcccccbbbeeb
    cccbbbbbcccccbbbecccccccccccb1111111111111111dbb111111111111111d11dbd1111111dbbbd11111111111111dddd11111111db111111111bd1111111dcccccccccccccccbbbbbcccccbbeccc
    fccccbbbcccccbccccccccccccccb1111111111111111dbb111111111111111111dbd1111111dbbbbd111111111111ddddd11111111dbd11111dd1bd1111111dcccccccccccccccccbbbcccccbccccc
    ccccccccccccccccccccccccccccb1111111111111111dbb111111111111111111dbd1111111dbbbbbbd11111111ddddddd11111111dbd1111111dbd1111111dccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccceebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddbbbbbbbbbbbbbeeccccccccccccccccccccccccccccccffccccc
    ccccccfcccccccccccccccccccccccccccceebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddbbbbbbbbbbbbbbeccccccccccccccccccccccffccccccccccccc
    cccccccccccccccccccccccccccccccccccebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccfcccccccbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddbbbbbbbbbbbbbbbbecccccccccccccccccccccccccccccccccc
    cccccccccccccccbccccccccccfccccccebbbbbbbbbbbbbbbbbbbbbbbbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbccc
    ccebbbccccccbbcbccebbcccccccccccebbbbbbbbbbbbbbbbbbbbbbbbbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddd333333ddbbbbbbbbbbbbbbbbbbbcccccccccccccccebbbecccccbbbbece
    bbbbbbbcccccbecceebbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbecebbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333333333333333ddbbbbbeebbbbbbbbbbbbeeeeeeebbbbbbbbbbbbbcccccbbbeeeb
    bbbbbbbecccccccebbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccebbbbbbbbbbbbbbbbbbbbbbbbbbbbbdd33333333333333ddbbbbbeebbbbbbbbbbbbbbbbeeebbbbbbbbbbbbbccccceeebbbb
    bbbbbbbbcccccccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddd33333333dd333dbbbbbeccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccebbbbb
    bbbbbbbbcccccccbbbbbbbbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb33333333333dd333dbbbbbeccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbb
    bbbbbbbbccccbcccbbbbbbbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333333333333333bbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbb
    bbbbbbbbccccbcccebbbbbbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb333333333333333bbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbcccbbbbbbbb
    bbbeeeebcccccccccbbbbbbcebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb333333333333333bbbbbccccbbbbbbbbbbbbbeebbbbbbbbeebbbbeeebcccbbbbbbbb
    bbeccccbccccccccccceecccccbeebbbbbbebbbbbbbbbbbbbbbbbbbbccccccebbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333333333333bbbbbbcccccbbbbbbbbbbeecccbbeeebbccbbcccccbcccbbeeeeee
    ccccccccccccccccccccccccccccccebbbbebbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbeeeeebbbbbbbbbbbbbbbbb3333333333bbbbbbbccccceebbbbbbbbcccccbccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccebbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbecccebbbbbbbbbbbbbbbbbb33333333bbbbbbbbcccccebbbbbbebcccccccccccccccccccccccccccccccccc
    cccccccbcccccccccccccccccccccccffcccccebbbbbbbbbbbbbbbbbbccccccbbbbbbbbbeccceebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbeccccccccffccccccccccccccbccccccccccf
    ccccccebccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbeecccccccccebbbbbbbcccccebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeecccccccbbecccccccccccccccccccccfcccbbccccccccccc
    cccccccbccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbeccccccccccebbbbbbbccccccbbbbbbbbebbbbbbbbbbbbebbbbbbbbeeccccccccccccccccccccccccccccccccccccceccccccccccc
    ccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbccccccccccebbbbbbccccccccbbbbbbbebbbbbbbbbbbbebbbbbbbbbeccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccebbbbbbbbbbbbbbbbcccccccccbbbbbbcccccccccebbbbbbeebbbbbbbbbbbcbbbbbbbbbecccccccccbccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbb3bbbbcccccccbbbbbbbeccccccccccbbbbbbcbbbbbbbbbbbbcbbbbbbbbbbcccccccbbbbcfcccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccebbbbeceebbbb33bebcccccccccceeecccccccccccebbbbecbbb3bb333bbbcebbbb33bbbbcccccccebbcfcccccccccccccccccccccccccccccccfcbbc
    eecccccccccccccccccccccccccccccccccccccebbeccccebbb33beccccccccccccccccccccccccccebbbcccbbb3333bbbccceb33333beccccccccbbbeccccccccccccccccccccccccccccccccccbec
    bbbeeccbccccccccccccccccccccccccccccccccecccccccebbb3becccccccccccccccccccccccccccccccccebbb33bbbeccceb3333bbbcccccccccebbeccccccccccccccccccccccccbccccbbbeebc
    33bbbeebcccccccccccccccccccccccccccccccccccccccccbbb3beccccccccccccccccccccccccccccccccccbbb33bbbccccebb333bbbcccccccccebbbbcccccccccccccccccccccccbcccbbbebbbe
    3333bbeecccccccccccccccccccccbbbccccccccccccccccccbbbbeccccccccccccccccccccccccccccccccccbbb33bbbccccbbbb33bbecccccccccebbbbcccccccccccccccccccccccccccebbbbbbb
    33333bbeccccccccccccccccccccbbbbccccccccccccccccccebbbecccccccccccccccccccccccccccccccccccbbbbbbccccccebb33bbecccccccccbbbbcccccccccccccccccccccccccccccebb333b
    333333bbccccccccccccccccccccbbbbcccccccccccccccccccebbcccccccccccccccccccccccccccccccccccccbbbbeccccccceb33bbecccccccccbbbccccccccccccccccccccccccceccccbb33333
    33bbbbbbcccccccccccccccccccccccccccccccccccccccccccccecccccccccccccccccccccccccccccccccccccbbbbecccccccbb3bbbcccccccccccccccccccccccccccccccccccccccccccb3333bb
    bbbeebbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb33becccccccbb3beeccccccccccccccccccccccccccccccccccccccccccbb333bbb
    bbecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbb33bbccccccebbbbbcccccccccccccccccccccccccccccccccccccccccccbb3bbbcc
    cccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbecccccccbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccbbbecccccccccccccccccccccccccccccccccccccccccccccceccccc
    ccccccfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceecccccccccbeeeccccccccccccccccccccccccccccccccccccccccccccfccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ebbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ebbbbeebccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ebbbbbbbeccccccccccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbeebbbbcccccccccbbbbbbccbbbbbbcbbbcccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    3bbeebbbcccccccbbbbbbbecccbbbbbbbbbccbbbccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    3bbbeecbccccccccbbbbbbbccbbbbbbbbbeccbbbcccccccccbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    bbbecccccccccccbbbbbbbbccbbbbbbbbbbccbbbeccccccccccccbbbbbccccbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    beccccccccccccccbbbbbbbccbbbbbbbbbbcebbbbbbbcccccccccccccccccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccbbbbbcccccccccbbbcbbbbbbbbcccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccbbbbcccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccbbccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfccccccccccccccccccccccfcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccbbbbccccccccccccccccccccccccccbbbbbbbbbbbbbcccccccbbbbccccbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccb111111dccd111dccb1111dcccccccb11111111dd111dcccccb1111bcccd11111bccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccb1111111dcbd111bcd1111bcccccccb11111111dd111dcccccb1111bccb111111bccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccb11111111bc11dddb1111dccccccccb11111111dd111dcccccb1111bccb11d111dccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccb11111111dcd1d1dd1111bccccccccb11d11111dd111dcccccbd111bccb111d11dccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccb1111d1111bcdbddd111dcccccccccb1111bccccd111dcccccb11ddbccd11111ddccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccb1111d1111bcb1111111bcccccccccb1111dddbcd111dcccccb11ddbccd11111bdbcccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccb11111111dcccd11111dccccccccccb11111111bd111dcccccb11ddbcc1111d1ddbcccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccb11111111dcccb11111bccccccccccb11111111bd111dcccccb1111bcb1111d111bcccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccb111111111bcccd111dcccccccccccb11111111cd111dcccccb1111bcb11111111dcccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccb111111111dcccd111dcccccccccccb1111ddddcd111dcccccb1111bcb11111111dcccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccb1111bddb11cccd111dcccccccccccb1111bccccd111dcccccb1111bcd111111111cccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccb1111bb1d11cccd111dcccccccccccb1111bccccd111dcccccb1111bcd111111111bccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccb1111bd1111cccd111dcccccccccccb1111bccccd111dcccccb1111bc1111bc1111bccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccb111111111dcccd111bcccccccccccb11111111bd1111ddd11b1111bb1111bcd111dccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccb111111111bcccd111bcccccccccccb11111111dd11111ddbdb1111bb111dccd111dccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccb11111111bccccd111bcccccccccccb11111111dd111111dbdb1111bd111dccb111dccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccb111111dccccccd111bcccccccccccb11111111dd11111111db1111cd111dccb1111ccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
game.splash("prem A")
info.setLife(3)
laia = sprites.create(assets.image`laia`, SpriteKind.Player)
scene.cameraFollowSprite(laia)
controller.moveSprite(laia, 100, 0)
scene.setBackgroundImage(assets.image`myImage0`)
tiles.setCurrentTilemap(tilemap`level1`)
laia.ay = 150
for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
    moneda2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.moneda)
    animation.runImageAnimation(
    moneda2,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(moneda2, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdateInterval(2000, function () {
    calavera = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Projectile)
    calavera.setPosition(randint(-50, 50), randint(-50, 50))
    calavera.follow(laia, 80)
})

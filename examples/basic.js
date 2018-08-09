import Sketchpad from '../src/instance/index.js'
import Draw, {createBox, createRegularPolygon} from '../src/interaction/Draw.js'

const
  pad = new Sketchpad($('pad')),

  domExtend = $('extend'),
  btnClear = $('clear'),
  inputType = $('draw-type'),
  inputFreehand = $('freehand'),
  inputSides = $('sides')

function $(selector) {
  return document.getElementById(selector)
}

function settingChange() {
  const
    freehandValue = inputFreehand.checked,
    sidesValue = inputSides.value

  let
    typeValue = inputType.value,
    _createGeometryCoordinates

  domExtend.style.display = 'none'

  if (typeValue === 'Box') {
    typeValue = 'Custom'
    _createGeometryCoordinates = createBox()
  } else if (typeValue === 'RegularPolygon') {
    domExtend.style.display = 'inline-block'

    typeValue = 'Custom'
    _createGeometryCoordinates = createRegularPolygon(sidesValue)
  }

  pad.setDraw(new Draw({
    type: typeValue,
    freehand: freehandValue,
    createGeometryCoordinates: _createGeometryCoordinates
  }))
}

btnClear.onclick = function() {
  pad.clear()
  pad.clearFeature()
}

inputType.onchange = function() {
  settingChange()
}

inputFreehand.onchange = function() {
  settingChange()
}

inputSides.onchange = function() {
  settingChange()
}

settingChange()

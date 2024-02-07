browser.browserAction.onClicked.addListener(function (tab) {
    browser.tabs.executeScript(tab.id, 
        {
            code: `
            var _initalized = false

            // Create the Idle Aura wrapper
            var IdleAuraWrapper = document.createElement('div')            
            var IdleAuraGame = document.createElement('iframe')
            IdleAuraGame.src = 'https://panintegralus.github.io/idleaura/'
            IdleAuraWrapper.id = 'idleaura-wrapper'

            // Styling
            IdleAuraWrapper.width = '940'
            IdleAuraWrapper.height = '240'
            IdleAuraGame.width = '940'
            IdleAuraGame.height = '240'
            IdleAuraGame.style.border = 'none'
            IdleAuraWrapper.style.position = 'fixed'
            IdleAuraWrapper.style.top = '10px'
            IdleAuraWrapper.style.right = '10px'
            IdleAuraWrapper.style.zIndex = '9999'
            IdleAuraWrapper.style.display = 'flex'
            IdleAuraWrapper.style['flex-direction'] = 'column'
            IdleAuraWrapper.style.border = '2px solid #ccc'
            IdleAuraWrapper.style['border-radius'] = '4px'
            IdleAuraWrapper.style['box-shadow'] = 'rgba(100,100,111,0.2) 0px 7px 29px 0px'
            // Layout (Popup Title, Closing)
            IdleAuraWrapper.innerHTML = '<div style="width:auto;overflow:hidden;background-color:#323232;color:#ccc;padding: 4px 8px;display:flex;flex-direction:row;justify-content:space-between"><span style="color:inherit">Idle Aura game</span><button id="_destroyIAW" style="background-color:lightcoral;border:none;color:inherit;width:20px;height:20px">X</button></div>'

            // Inject
            IdleAuraWrapper.appendChild(IdleAuraGame)
            document.body.appendChild(IdleAuraWrapper)

            // Handler Script _destroyIAW()
            document.querySelector('#_destroyIAW').addEventListener('click', () => {
                document.querySelector('#idleaura-wrapper').remove()
                IdleAuraWrapper = null
                IdleAuraGame = null
            })
            `
        }
    )
})
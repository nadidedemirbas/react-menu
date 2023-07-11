import { Outlet, Link } from 'react-router-dom'

export default function Menu() {

    let currentTab = null;

    const openTab = (tabID) => {
        hideAllTabs();
        deactivateAllButtons();
        if (currentTab === tabID) {
            currentTab = null;
            return;
        }
        const tabToOpen = document.querySelector(`#menu-tab-${tabID}`);
        tabToOpen.style.display = 'flex'
        const buttonToActivate = document.querySelector(`#menu-main-button-${tabID}`);
        activateButton(buttonToActivate);
        currentTab = tabID;
    }

    const hideAllTabs = () => {
        const tabs = document.querySelectorAll('.menu-tab');
        for (let tab of tabs) {
            tab.style.display = 'none';
        }
        deactivateAllButtons();
    }

    const deactivateAllButtons = () => {
        const buttons = document.querySelectorAll('.button');
        for (let button of buttons) {
            deactivateButton(button)
        }
    }

    const activateButton = (button) => {
        button.style.color = 'deeppink'
    }

    const deactivateButton = (button) => {
        button.style.color = 'black'
    }

    return(
        <section>
            <div className={'menu-main'}>
                <span id={'menu-main-button-1'} className={'button'} onClick={() => openTab(1)}>Tekstil</span>
                <span id={'menu-main-button-2'} className={'button'} onClick={() => openTab(2)}>Elektronik</span>
                <span id={'menu-main-button-3'} className={'button'} onClick={() => openTab(3)}>Kozmetik</span>
            </div>
            <div className={'menu-tabs'}>
                <div id={'menu-tab-1'} className={'menu-tab'}>
                    <div>
                        <div>
                            <span className={'subtitle'}>Giyim</span>
                            <Link to={'/tekstil/elbise'}><span className={'button'}>Elbise</span></Link>
                            <Link to={'/tekstil/tisort'}><span className={'button'}>Tişört</span></Link>
                        </div>
                        <div>
                            <span className={'subtitle'}>Ayakkabı</span>
                            <Link to={'/tekstil/topuklu-ayakkabi'}><span className={'button'}>Topuklu Ayakkabı</span></Link>
                            <Link to={'/tekstil/sneaker'}><span className={'button'}>Sneaker</span></Link>
                        </div>
                    </div>
                    <div>
                        <img src="https://picsum.photos/200/300" alt="menu1"/>
                    </div>
                </div>
                <div id={'menu-tab-2'} className={'menu-tab'}>
                    <div>
                        <div>
                            <span className={'subtitle'}>Bilgisayar</span>
                            <Link to={'/elektronik/masaustu'}><span className={'button'}>Masaüstü</span></Link>
                            <Link to={'/elektronik/dizustu'}><span className={'button'}>Dizüstü</span></Link>
                        </div>
                        <div>
                            <span className={'subtitle'}>Telefon</span>
                            <Link to={'/elektronik/apple'}><span className={'button'}>Apple</span></Link>
                            <Link to={'/elektronik/android'}><span className={'button'}>Android</span></Link>
                        </div>
                    </div>
                    <div>
                        <img src="https://picsum.photos/200/300" alt="Menu2"/>
                    </div>
                </div>
                <div id={'menu-tab-3'} className={'menu-tab'}>
                    <div>
                        <div>
                            <span className={'subtitle'}>Makyaj</span>
                            <Link to={'/kozmetik/goz-makyaji'}><span className={'button'}>Göz Makyajı</span></Link>
                            <Link to={'/kozmetik/ten-makyaji'}><span className={'button'}>Ten Makyajı</span></Link>
                        </div>
                        <div>
                            <span className={'subtitle'}>Saç Bakımı</span>
                            <Link to={'/kozmetik/sampuan'}><span className={'button'}>Şampuan</span></Link>
                            <Link to={'/kozmetik/sac-kremi'}><span className={'button'}>Saç Kremi</span></Link>
                        </div>
                    </div>
                    <div>
                        <img src="https://picsum.photos/200/300" alt="menu3"/>
                    </div>
                </div>
            </div>
            <div className={'route-outlet'}>
                <Outlet />
            </div>
        </section>
    );
}
import React from 'react';
import { Link } from 'react-router-dom';

function DiscoverGames() {

  return (
    <div className="discover-games-outer">
      <div className="discover-games-placeholder">

        <a href="/#/games/1">
          <div className="discover-game">
            <div id="tiny" className="discover-tiny-pic-1"></div>
              <div className="outer-title-price">
                <div className="just-title">Cyberpunk 2077</div>
                <div className="just-price">$&nbsp;59.99</div>           
              </div>
          </div>
        </a>
        
        <a href="/#/games/7">
          <div className="discover-game">
            <div id="tiny" className="discover-tiny-pic-2"></div>
            <div className="outer-title-price">
              <div className="just-title">Witcher III: GOTY Edition</div>
              <div className="just-price">$&nbsp;14.99</div>
            </div>
          </div>
        </a>

        <a href="/#/games/2">
          <div className="discover-game">
            <div id="tiny" className="discover-tiny-pic-3"></div>
            <div className="outer-title-price">
              <div className="just-title">Life is Strange: Complete Season</div>
              <div className="just-price">$&nbsp;19.99</div>
            </div>
          </div>
        </a>

        <a href="/#/games/3">
          <div className="discover-game">
            <div id="tiny" className="discover-tiny-pic-4"></div>
            <div className="outer-title-price">
              <div className="just-title">Desperados III</div>
              <div className="just-price">$&nbsp;49.99</div>
            </div>
          </div>
        </a>
        
        <a href="/#/games/4">
          <div className="discover-game">
            <div id="tiny" className="discover-tiny-pic-5"></div>
            <div className="outer-title-price">
              <div className="just-title">SpongeBob: Battle for Bikini Bottom</div>
              <div className="just-price">$&nbsp;29.99</div>
            </div>
          </div>
        </a>
        
        <a href="/#/games/5">
          <div className="discover-game">
            <div id="tiny" className="discover-tiny-pic-6"></div>
            <div className="outer-title-price">
              <div className="just-title">Streets of Rage 4</div>
              <div className="just-price">$&nbsp;24.99</div>
            </div>
          </div>
        </a>

        <a href="/#/games/9">
          <div className="discover-game">
            <div id="tiny" className="discover-tiny-pic-7"></div>
            <div className="outer-title-price">
              <div className="just-title">Darksiders Genesis</div>
              <div className="just-price">$&nbsp;29.99</div>
            </div>
          </div>
        </a>

        <a href="/#/games/6">
          <div className="discover-game">
            <div id="tiny" className="discover-tiny-pic-8"></div>
            <div className="outer-title-price">
              <div className="just-title">Summer in Mara</div>
              <div className="just-price">$&nbsp;24.99</div>
            </div>
          </div>
        </a>
        
        <a href="/#/games/8">
          <div className="discover-game">
            <div id="tiny" className="discover-tiny-pic-9"></div>
            <div className="outer-title-price">
              <div className="just-title">Legend of Heroes: Trails of Cold Steel III</div>
              <div className="just-price">$&nbsp;59.99</div>
            </div>
          </div>
        </a>

        <a href="/#/games/10">
          <div className="discover-game">
            <div id="tiny" className="discover-tiny-pic-10"></div>
            <div className="outer-title-price">
              <div className="just-title">Stardew Valley</div>
              <div className="just-price">$&nbsp;14.99</div>
            </div>
          </div>
        </a >
      </div>

      <div className="discover-right-side">
        
        <a href="/#/games/7"><div className="big-discover-right" /></a>
        <a href="/#/games/1"><div className="small-discover-right" /></a>

      </div>
    </div>
    
  )
}

export default DiscoverGames
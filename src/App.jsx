
import ex from "./assets/ex.png";
import { LiaSave } from "react-icons/lia";
import { LuUndo } from "react-icons/lu";
import { VscRedo } from "react-icons/vsc";
import { CgToolbarTop } from "react-icons/cg";
import { LiaSearchSolid } from "react-icons/lia";
import { FaUserLarge } from "react-icons/fa6";
import { IoIosClose, IoIosSearch } from "react-icons/io";
import { FaRegPaste, FaTableCells } from "react-icons/fa6";
import { FaRegCopy, FaFilter, FaSortAlphaUp } from "react-icons/fa";
import { PiPaintBrushHousehold } from "react-icons/pi";
import { IoIosCut } from "react-icons/io";
import { RiFontFamily } from "react-icons/ri";
import { MdBorderBottom } from "react-icons/md";
import { MdFormatBold } from "react-icons/md";
import { LuItalic, LuTableCellsMerge } from "react-icons/lu";
import { MdFormatUnderlined, MdOutlineFormatIndentDecrease, MdOutlineFormatIndentIncrease } from "react-icons/md";
import { MdFormatColorFill } from "react-icons/md";
import { BsPercent, BsTable, BsFileArrowDown } from "react-icons/bs";
import { SiComma } from "react-icons/si";
import { LiaAlignCenterSolid, LiaAlignJustifySolid, LiaAlignLeftSolid, LiaAlignRightSolid } from "react-icons/lia";
import { TbSum, TbMathFunction } from "react-icons/tb";
import { TextAlignCenter, Eraser, Table, TextAlignEnd, Check, TextAlignJustify, TextAlignStart, Combine, DecimalsArrowLeft, DecimalsArrowRight, Grid2X2Plus, Grid2X2, Grid2x2X } from 'lucide-react';
import { TbTextOrientation } from "react-icons/tb";
import "./App.css";
import { HiOutlineDotsVertical } from "react-icons/hi";
function App() {
  return (
    <div className="All-code">
      <div className="container">

        {/* LEFT */}
        <div className="left-nav">
          <img src={ex} alt="logo" className="logo" />

          <span className="autosave-text">AutoSave</span>

          <div className="toggle">
            <input type="checkbox" id="btn" />
            <label htmlFor="btn" className="switch">
              <span className="circle"></span>
              <span className="text off">Off</span>
              <span className="text on">On</span>
            </label>
          </div>

          <LiaSave className="icon" />
          <LuUndo className="icon" />
          <VscRedo className="icon" />
          <CgToolbarTop className="icon" />

          <span className="title">Book1 - Excel</span>
          <div className="sheet-name"><p>Excel Sheet Name
            <span> <li>last Modified On 10-05-2020</li></span> </p>
          </div>

          <div className="middle-nav">

            <div className="search-box">
              <LiaSearchSolid />
              <input type="text" placeholder="What Can I help You" />
            </div>
          </div>
        </div>





        <div className="right-nav">
          <div className="profile">
            <FaUserLarge className="user" />
          </div>

          <div class="window-controls">
            <button class="minimize">—</button>
            <button class="maximize">☐</button>
            <button class="close">✕</button>
          </div>

        </div>
      </div>

      <div className="navbar">
        <div className="left-side">
          <nav>
            <ul>
              <li>File</li>
              <li>Home</li>
              <li>Insert</li>
              <li>Draw</li>
              <li>Page Layout</li>
              <li>Formula</li>
              <li>Review</li>
              <li>View</li>
              <li>help</li>
              <li>Team</li>
            </ul>
          </nav>
        </div>

        <div className="right-side">
          <button className="cmt">Comments</button>
          <button className="share">Share</button>
        </div>
      </div>

      <div className="classe">
        <div className="first">
          <div className="paste">
            < FaRegPaste className="ast" />
            <p>Paste</p>
          </div>
          <div className="ccf">
            <ul>
              <li><IoIosCut className="abey" />Cut</li>
              <li><FaRegCopy className="abey" />Copy</li>
              <li><PiPaintBrushHousehold className="abey" />Format Painter</li>
              <li>Clipboard</li>
            </ul>
          </div>

          <div class="v-line"></div>
        </div>

        <div className="second">
          <div className="size">

            <input type="text" list="options" defaultValue="Calibri" className="font-family" />

            <datalist id="options">
              <option value="TIme Roman" />
              <option value="Ares" />
              <option value="Caligrpg" />
              <option value="Caligrpg" />
            </datalist>
            <input type="number" defaultValue="14px" className="digit" />
            <RiFontFamily className="font-s" />
            <RiFontFamily />

          </div>
          <div className="shape">
            <MdFormatBold className="bo" />
            <LuItalic className="boo" />

            <MdFormatUnderlined className="booo" />
            <div className="li"></div>
            <MdBorderBottom className="bottom" />
            <MdFormatColorFill className="fill" />
            <RiFontFamily className="color" />
          </div>
          <div className="fin">Font</div>
        </div>
        <div className="x-line"></div>


        <div className="third">
          <div className="t-alignment">
            <TextAlignStart className="ti" />
            <TextAlignJustify className="ti" />
            <TextAlignEnd className="ti" />
            <div className="li"></div>
            <TbTextOrientation className="ti" />

          </div>
          <div className="p-alignment">
            <LiaAlignCenterSolid className="wi" />
            <LiaAlignJustifySolid className="wi" />
            <LiaAlignLeftSolid className="wi" />

            <LiaAlignRightSolid className="wi" />
            <div className="li"></div>
            <MdOutlineFormatIndentIncrease className="wi" />
            <MdOutlineFormatIndentDecrease className="wi" />



          </div>


          <div className="fin">Alignment</div>
        </div>
        <div className="cd"></div>
        <div className="miss">
          <ul>
            <li>Wrap text</li>
            <li>Merge And sort</li>
          </ul>


        </div>
        <div className="x-line"></div>
        <div className="fourth">
          <div className="f-1">
            <input type="text" list="options" defaultValue="General" className="gen" />

            <datalist id="options">
              <option value="Number" />
              <option value="Currency" />
              <option value="Accounting " />
              <option value="Short Date" />
            </datalist>
          </div>
          <div className="maths">
            <ul>

              <li><BsPercent /></li>
              <li><SiComma /></li>
              <li><DecimalsArrowRight /></li>
              <li><DecimalsArrowLeft /></li>
            </ul>
          </div>
          <div className="num">Number</div>

        </div>

        <div className="x-line"></div>

        <div className="fifth">
          <ul>
            <li className="eo">
              <BsTable className="gap" />
              Conditional Formatting
            </li>
            <li className="eoo">
              <LuTableCellsMerge className="gap" />
              Format Table
            </li>
            <li className="eooo">
              <FaTableCells className="gap" />
              Cell Style
            </li>
          </ul>
          <div className="style">Styles</div>
        </div>
        <div className="x-line"></div>
        <div className="six">
          <ul>
            <li className="eo">
              <Grid2X2Plus className="gapd" />
              Insert</li>

            <li className="eoo">
              <Grid2x2X className="gapd" />
              Delete
            </li>

            <li className="eooo">
              <Table className="gapd" />
              Format
            </li>
          </ul>
          <div className="cell">Cells</div>
        </div>
        <div className="x-line"></div>
        <div className="seven">
          <div className="sum">
            <ul>
              <li>
                <TbSum className="autosum" />AutoSum

              </li>
              <li>
                <BsFileArrowDown className="fill" />
                Fill
              </li>
              <li>
                <Eraser />
                Clear
              </li>
            </ul>
          </div>
          <div className="sortf">
            <ul>
              <li>
                <FaSortAlphaUp className="sort" />
                <FaFilter className="filter" />
              </li>
              <li>Sort &Filter</li>
            </ul>
          </div>
          <div className="serch">
            <ul>
              <li>
                <IoIosSearch className="ser" />
              </li>
              <li>Find &Select</li>
            </ul>
          </div>
        </div>
        <div className="v-line"></div>
        <div className="eight">
          <ul>
            <li><Grid2X2Plus className="gas" />
              AddIn
            </li>

          </ul>
        </div>
      </div>

      <div className="box">
        <div className="box-no" >
          <input type="text" defaultValue="D5" />
        </div>
        <div className="dot">
          <HiOutlineDotsVertical />
        </div>
        <div className="rght">
          <span >
            <Check className="check" />
            <IoIosClose className="svg" />
            <TbMathFunction className="wrong" />
          </span>
        </div>
        <div className="content">
          <input type="text" />
        </div>
      </div>

      <div className="grid-a">
        <table className="excel">
          <thead>
            <tr>
              <td className="special"></td>
              <th>A</th>
              <th>B</th>
              <th>C</th>
              <th>D</th>
              <th>E</th>
              <th>F</th>
              <th>G</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="special">1</td>
              <td className="bold">Name</td>
              <td className="bold">Roll No</td>
              <td className="bold">Maths</td>
              <td className="bold">Science</td>
              <td className="bold">English</td>
              <td className="bold">Total</td>
              <td className="bold"> Grade</td>
            </tr>

            <tr>
              <td className="special">2</td>
              <td>Rahul</td>
              <td>101</td>
              <td>85</td>
              <td>78</td>
              <td>90</td>
              <td>253</td>
              <td>A</td>
            </tr>

            <tr>
              <td className="special">3</td>
              <td>Priya</td>
              <td>102</td>
              <td>92</td>
              <td>88</td>
              <td>95</td>
              <td>275</td>
              <td>A+</td>
            </tr>

            <tr>
              <td className="special">4</td>
              <td>Bhavya</td>
              <td>12</td>
              <td>92</td>
              <td>08</td>
              <td>95</td>
              <td>25</td>
              <td>D</td>
            </tr>
            

            <tr>
              <td className="special">4</td>
              <td>Aman</td>
              <td>103</td>
              <td>70</td>
              <td>65</td>
              <td>72</td>
              <td>207</td>
              <td>B</td>
            </tr>

            <tr>
              <td className="special">5</td>
              <td>Sneha</td>
              <td>104</td>
              <td>88</td>
              <td>91</td>
              <td>86</td>
              <td>265</td>
              <td>A</td>
            </tr>

            <tr>
              <td className="special">6</td>
              <td>Rohit</td>
              <td>105</td>
              <td>60</td>
              <td>55</td>
              <td>65</td>
              <td>180</td>
              <td>C</td>
            </tr>

            <tr>
              <td className="special">7</td>
              <td>Anjali</td>
              <td>106</td>
              <td>95</td>
              <td>93</td>
              <td>97</td>
              <td>285</td>
              <td>A+</td>
            </tr>

            <tr>
              <td className="special">8</td>
              <td>Karan</td>
              <td>107</td>
              <td>75</td>
              <td>80</td>
              <td>78</td>
              <td>233</td>
              <td>B+</td>
            </tr>

            <tr>
              <td className="special">9</td>
              <td>Neha</td>
              <td>108</td>
              <td>82</td>
              <td>85</td>
              <td>88</td>
              <td>255</td>
              <td>A</td>
            </tr>

            <tr>
              <td className="special">10</td>
              <td>Vikas</td>
              <td>109</td>
              <td>68</td>
              <td>72</td>
              <td>70</td>
              <td>210</td>
              <td>B</td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>


  );
}

export default App;
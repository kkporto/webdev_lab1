export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      
      <button>Collapse all</button> <button>View progress</button> 
      <select>
      <option value="VAL1">Publish all</option>
      <option value="VAL2" selected>Publish</option>
      </select> 
      <button>Module</button>



      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>
    <li className="wd-module">
      <div className="wd-title">Week 2</div>
      <ul className="wd-lessons">
        <li className="wd-lesson">
          <span className="wd-title">LEARNING OBJECTIVES</span>
          <ul className="wd-content">
            <li className="wd-content-item">Understanding HTML basics</li>
            <li className="wd-content-item">Creating simple web pages</li>
            <li className="wd-content-item">Using tags and elements correctly</li>
          </ul>
        </li>
      </ul>
    </li>
    <li className="wd-module">
      <div className="wd-title">Week 3</div>
      <ul className="wd-lessons">
        <li className="wd-lesson">
          <span className="wd-title">LEARNING OBJECTIVES</span>
          <ul className="wd-content">
            <li className="wd-content-item">Styling with CSS</li>
            <li className="wd-content-item">Working with classes and IDs</li>
            <li className="wd-content-item">Linking external stylesheets</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
);}

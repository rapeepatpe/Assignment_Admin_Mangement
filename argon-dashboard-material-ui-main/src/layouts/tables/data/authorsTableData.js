/* eslint-disable react/prop-types */
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";



const authorsTableData = {
  columns: [


        { name: "ชื่อหน่วยงาน", align: "left" },
        { name: "รหัสหน่วยบริการ", align: "center" },
        { name: "วันที่ขึ้นทะเบียน", align: "center" },
        { name: "ชื่อผู้ตรวจสอบ", align: "center" },
        { name: "วันที่ตรวจสอบ", align: "center" },

  ],

  rows: [
    {
          ชื่อหน่วยงาน: (
              <ArgonTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="secondary"
                  fontWeight="medium"
              >
                  Edit
              </ArgonTypography>
          ),
          รหัสหน่วยบริการ: (
              <ArgonTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="secondary"
                  fontWeight="medium"
              >
                  Edit
              </ArgonTypography>
          ),
          วันที่ขึ้นทะเบียน: (
              <ArgonTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="secondary"
                  fontWeight="medium"
              >
                  Edit
              </ArgonTypography>
          ),
          ชื่อผู้ตรวจสอบ: (
              <ArgonTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="secondary"
                  fontWeight="medium"
              >
                  Edit
              </ArgonTypography>
          ),
          วันที่ตรวจสอบ: (
            <ArgonTypography
              component="a"
              href="#"
              variant="caption"
              color="secondary"
              fontWeight="medium"
            >
              Edit
            </ArgonTypography>
          ),
      },



    //{
    //  author: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
    //  function: <Function job="Programator" org="Developer" />,
    //  status: (
    //    <ArgonBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
    //  ),
    //  employed: (
    //    <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
    //      11/01/19
    //    </ArgonTypography>
    //  ),
    //  action: (
    //    <ArgonTypography
    //      component="a"
    //      href="#"
    //      variant="caption"
    //      color="secondary"
    //      fontWeight="medium"
    //    >
    //      Edit
    //    </ArgonTypography>
    //  ),
    //},
    //{
    //  author: <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
    //  function: <Function job="Executive" org="Projects" />,
    //  status: (
    //    <ArgonBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
    //  ),
    //  employed: (
    //    <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
    //      19/09/17
    //    </ArgonTypography>
    //  ),
    //  action: (
    //    <ArgonTypography
    //      component="a"
    //      href="#"
    //      variant="caption"
    //      color="secondary"
    //      fontWeight="medium"
    //    >
    //      Edit
    //    </ArgonTypography>
    //  ),
    //},
    //{
    //  author: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
    //  function: <Function job="Programator" org="Developer" />,
    //  status: (
    //    <ArgonBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
    //  ),
    //  employed: (
    //    <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
    //      24/12/08
    //    </ArgonTypography>
    //  ),
    //  action: (
    //    <ArgonTypography
    //      component="a"
    //      href="#"
    //      variant="caption"
    //      color="secondary"
    //      fontWeight="medium"
    //    >
    //      Edit
    //    </ArgonTypography>
    //  ),
    //},
    //{
    //  author: <Author image={team2} name="Richard Gran" email="richard@creative-tim.com" />,
    //  function: <Function job="Manager" org="Executive" />,
    //  status: (
    //    <ArgonBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
    //  ),
    //  employed: (
    //    <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
    //      04/10/21
    //    </ArgonTypography>
    //  ),
    //  action: (
    //    <ArgonTypography
    //      component="a"
    //      href="#"
    //      variant="caption"
    //      color="secondary"
    //      fontWeight="medium"
    //    >
    //      Edit
    //    </ArgonTypography>
    //  ),
    //},
    //{
    //  author: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
    //  function: <Function job="Programtor" org="Developer" />,
    //  status: (
    //    <ArgonBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
    //  ),
    //  employed: (
    //    <ArgonTypography variant="caption" color="secondary" fontWeight="medium">
    //      14/09/20
    //    </ArgonTypography>
    //  ),
    //  action: (
    //    <ArgonTypography
    //      component="a"
    //      href="#"
    //      variant="caption"
    //      color="secondary"
    //      fontWeight="medium"
    //    >
    //      Edit
    //    </ArgonTypography>
    //  ),
    //},
  ],
};

export default authorsTableData;

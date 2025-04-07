import { CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const DataScience = (): JSX.Element => {
  // Program information data
  const programInfo = [
    {
      title: "Mã ngành",
      value: "7460108",
    },
    {
      title: "Thời gian đào tạo",
      value: "Tối thiểu 3 năm theo quy định",
    },
    {
      title: "Tổ hợp môn",
      combinations: [
        { code: "A00", subjects: "Toán, Vật lý, Hóa học" },
        { code: "A01", subjects: "Toán, Vật lý, Tiếng Anh" },
        { code: "D01", subjects: "Toán, Ngữ văn, Tiếng Anh" },
        { code: "D07", subjects: "Toán, Hóa học, Tiếng Anh" },
      ],
    },
  ];

  // Program objectives data
  const objectives = [
    {
      title: "Kiến thức nền tảng vững chắc",
      description:
        "Đào tạo chuyên sâu về các lĩnh vực cụ thể, đáp ứng nhu cầu xã hội.",
    },
    {
      title: "Chú trọng thực hành",
      description:
        "Chương trình học song song với cùng các hoạt động thực hành ngay trên lớp, giúp sinh viên áp dụng kiến thức một cách linh hoạt hiệu quả.",
    },
    {
      title: "Phát triển tư duy và đạo đức nghề nghiệp",
      description:
        "Rèn luyện tư duy logic, sáng tạo và khả năng giải quyết vấn đề.",
    },
  ];

  // Program structure data
  const programStructure = [
    {
      title: "Kiến thức giáo dục đại cương",
      credits: "25 tín chỉ",
    },
    {
      title: "Kiến thức giáo dục chuyên nghiệp",
      credits: "83 tín chỉ",
    },
    {
      title: "Kiến thức chuyên ngành",
      credits: "",
    },
    {
      title: "Thực tập và tốt nghiệp",
      credits: "12 tín chỉ",
    },
  ];

  // Graduate outcomes data
  const outcomes = [
    {
      title: "Ứng dụng vào thực tiễn",
      description:
        "Áp dụng các kiến thức chuyên môn nhất định vào các lĩnh vực kinh tế, xã hội, khoa học và công nghệ.",
    },
    {
      title: "Thành thạo kỹ năng",
      description:
        "Rèn luyện kỹ năng sử dụng các công cụ, phần mềm chuyên dụng trong lĩnh vực khoa học dữ liệu.",
    },
    {
      title: "Tinh thần trách nhiệm",
      description:
        "Mang tinh thần trách nhiệm cao với nghề nghiệp, không ngừng nỗ lực cải thiện bản thân, nâng cao trình độ, học tập cả đời.",
    },
  ];

  // Career opportunities data
  const careerOpportunities = [
    "Nhà phân tích dữ liệu (Data Analyst)",
    "Kỹ sư dữ liệu (Data Engineer)",
    "Cán bộ khoa học dữ liệu, quản lý, điều hành trong lĩnh vực công nghệ thông tin.",
    "Cán bộ nghiên cứu, cán bộ giảng dạy về công nghệ thông tin tại các Viện, Trung tâm nghiên cứu và các Cơ sở đào tạo.",
  ];

  // Contact information data
  const contactInfo = [
    {
      title: "Email",
      value: "ut-hcmc@ut.edu.vn",
    },
    {
      title: "Phòng Đào Tạo",
      value: "0283 8992862",
    },
    {
      title: "Tuyển sinh",
      value: "028 3512 8986",
    },
    {
      title: "Văn thư",
      value: "028 3899 1373",
    },
  ];

  // Campus locations data
  const campusLocations = [
    "Cơ sở 1: Số 2, Đường Võ Oanh, phường 25, Q. Bình Thạnh, TP.HCM",
    "Cơ sở 2: Số 10 đường số 12, KP3, P. An Khánh, TP. Thủ Đức, TP.HCM",
    "Cơ sở 3: Số 70 đường Tô Ký, phường Tân Chánh Hiệp, quận 12, TP.HCM",
  ];

  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Header */}
        <header className="py-10 text-center bg-[url(public/rectangle-49.svg)] mb-[0.5rem]">
          <h1 className="font-bold text-[#008080] text-[28px] mb-2">
            TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI <br />
            THÀNH PHỐ HỒ CHÍ MINH
          </h1>
          <p className="font-normal text-[#008080] text-lg">
            UNIVERSITY OF TRANSPORT HO CHI MINH CITY
          </p>
          <div className="absolute right-[84px] top-[171px]">
            <img
              className="w-[22px] h-[22px]"
              alt="Search"
              src="public/search.png"
            />
          </div>
        </header>

        {/* Hero Banner */}
        <section className="w-full h-[527px] relative bg-[url(public/image.png)] bg-cover bg-center">
          <div className="absolute top-[94px] left-[69px]">
            <h2 className="font-extrabold text-white text-[45px] text-justify mb-8">
              KHOA HỌC DỮ LIỆU
            </h2>
            <p className="text-white text-[28px] font-normal text-justify w-[684px]">
              Khoa học dữ liệu là một trong những ngành mới của công nghệ trong
              tương lai.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="grid grid-cols-6 gap-12 px-[69px] mt-20 py-16">
          <div className="col-span-6 lg:col-span-3">
            <div className="mb-6">
              <h2 className="font-medium text-black text-[45px] text-justify">
                Giới thiệu chung
              </h2>
              <Separator className="w-[350px] h-0.5 bg-[#008080] mt-4" />
            </div>
            <p className="text-black text-3xl font-normal text-justify">
              Khoa học Dữ liệu được xây dựng và triển khai nhằm mục tiêu đào tạo
              cử nhân ngành Khoa học Dữ liệu có phẩm chất chính trị vững vàng,
              có ý thức tổ chức kỷ luật, đạo đức nghề nghiệp; có năng lực thực
              hành nghề nghiệp gồm kiến thức cơ bản và chuyên sâu về chuyên
              ngành; có phương pháp tư duy, năng lực tự nghiên cứu và phong cách
              làm việc hiện đại, đáp ứng các yêu cầu về nghiên cứu phát triển và
              có khả năng phân tích dữ liệu, ứng dụng các kỹ thuật của trí tuệ
              nhân tạo để khám phá dữ liệu, hỗ trợ ra quyết định, xây dựng chiến
              lược và thúc đẩy sự chuyển đổi số và kinh doanh số tại các tổ chức
              doanh nghiệp đạt lợi thế cạnh tranh trong môi trường hội nhập toàn
              cầu.
            </p>
          </div>
          <div className="relative col-span-6 lg:col-span-3">
            <div className="absolute w-[432px] h-[380px] top-0 right-0 bg-[#00999933]" />
            <img
              className="relative w-full lg:w-[516px] h-full lg:h-[305px] mt-[37px]"
              alt="Data Science Visualization"
              src="public/image-3.png"
            />
          </div>
        </section>

        {/* Program Information */}
        <section className="px-[60px] py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-black text-[35px] text-justify">
              {programInfo[0].title}
            </h3>
            <p className="font-light text-black text-[25px] text-justify mt-4">
              {programInfo[0].value}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black text-[35px] text-justify">
              {programInfo[1].title}
            </h3>
            <p className="font-light text-black text-[25px] text-justify mt-4">
              {programInfo[1].value}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black text-[35px] text-justify">
              {programInfo[2].title}
            </h3>
            <div className="flex flex-col gap-[15px] mt-4">
              {programInfo[2]?.combinations?.map((combo, index) => (
                <p
                  key={index}
                  className="font-normal text-black text-[25px] text-justify"
                >
                  <span className="font-bold">{combo.code}: </span>
                  <span className="font-light">{combo.subjects}</span>
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Program Objectives */}
        <section className="w-full h-auto py-16 bg-[url(public/rectangle-48.svg)] bg-cover">
          <div className="px-[69px]">
            <h2 className="font-bold text-white text-[50px] text-justify mb-4">
              Mục tiêu của chương trình đào tạo
            </h2>
            <p className="font-medium text-white text-3xl text-justify mb-12">
              Chương trình đào tạo của ngành Khoa học dữ liệu luôn cân bằng được
              nhu cầu về tri thức và thực tế của sinh viên.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {objectives.map((objective, index) => (
                <Card key={index} className="bg-[#fffefe] rounded-[20px]">
                  <CardContent className="p-8">
                    <h3 className="font-medium text-black text-[32px] mb-12">
                      {objective.title}
                    </h3>
                    <Separator className="w-[100px] h-[3px] bg-[#008080] mb-8" />
                    <p className="font-normal text-[#7f827e] text-[28px]">
                      {objective.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Graduate Outcomes */}
        <section className="px-[60px] py-16">
          <h2 className="font-bold text-[#008080] text-6xl mb-4">
            Năng lực đầu ra
          </h2>
          <Separator className="w-[480px] h-0.5 bg-[#008080] mb-12" />

          <div className="flex flex-col xl:flex-row gap-16">
            <div className="flex-1 mt-24">
              <h3 className="font-medium text-black text-3xl mb-6">
                Sau khi hoàn thành chương trình học, sinh viên ngành Khoa học dữ
                liệu có thể
              </h3>
              <img
                className="w-full h-auto object-cover"
                alt="Data Science Students"
                src="public/image-2.png"
              />
            </div>

            <div className="flex-1 bg-gradient-to-b from-[rgba(0,153,153,0.2)] to-[rgba(255,255,255,0.2)] p-12">
              {outcomes.map((outcome, index) => (
                <div key={index} className="mb-12">
                  <h3 className="font-bold text-black text-[35px] mb-4">
                    {outcome.title}
                  </h3>
                  <p className="font-medium text-black text-[28px] mb-6">
                    {outcome.description}
                  </p>
                  {index < outcomes.length - 1 && (
                    <Separator className="w-[560px] h-0.5 bg-black mb-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Structure */}
        <section className="w-full h-auto py-16 bg-[url(public/rectangle-52.svg)] bg-cover">
          <div className="text-center mb-8">
            <h2 className="font-bold text-white text-[50px] mb-6">
              Cấu trúc chương trình học
            </h2>
            <div className="bg-white rounded-[15px] w-[428px] h-[39px] mx-auto flex items-center justify-center">
              <p className="font-semibold text-[#009999] text-[25px]">
                Tổng số tín chỉ: 120 tín chỉ
              </p>
            </div>
          </div>

            <div className="flex flex-col lg:flex-row items-center p-12">
              <div className="px-9 flex-1">
                {programStructure.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white px-8 mt-12 py-12 rounded-[15px] h-[45px] flex items-center"
                  > 
                    <p className="font-semibold text-[#008080] text-3xl">
                      {item.title}
                      {item.credits && `: ${item.credits}`}
                    </p>
                  </div>
                ))}
              </div>
              <div className="max-w-[720px] lg:max-w-[360px] mt-16 lg:mt-0 max-h-[460px] lg:max-h-[230px] rounded-lg">
                <img
                  className="w-full h-full rounded-lg object-cover"
                  alt="Program Structure"
                  src="public/image-1.png"
                />
              </div>
            </div>

        </section>

        {/* Career Opportunities */}
        <section className="grid grid-cols-12 px-[60px] py-16 items-center gap-8">
          <h2 className="lg:col-span-5 col-span-12 font-bold text-[#008080] text-[120px] mb-12">
            Cơ hội việc làm
          </h2>

          <div className="mb-12 lg:col-span-7 col-span-12 font-normal text-black text-[38px]">
              Sau khi tốt nghiệp chuyên ngành Khoa học dữ liệu, sinh viên của
              ngành có có thể đạt các vị trí phù hợp:
          </div>

          <div className="col-span-12 h-2 w-full bg-[#009999]"></div>

          <div className="col-span-12">
            {careerOpportunities.map((opportunity, index) => (
              <div key={index} className="flex mt-12 items-start gap-6">
                <CheckIcon className="w-[50px] h-[50px] text-[#008080] flex-shrink-0" />
                <p className="font-medium text-black text-[35px]">
                  {opportunity}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full bg-[url(public/rectangle-49.svg)] bg-cover pt-[100px]">
          <div className="px-[82px] pb-14">
            <div className="flex flex-col md:flex-row items-start gap-12 mb-12">
              <img
                className="w-[300px] h-[92px] object-cover"
                alt="University Logo"
                src="public/image-3-1.png"
              />

              <div className="flex flex-col items-center">
                <h3 className="font-bold text-[#3f3f3f] text-[25px] mb-8">
                  TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI THÀNH PHỐ HỒ CHÍ MINH
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex flex-col gap-1">
                      <p className="font-medium text-[#5e5e5e] text-[22px]">
                        {info.title}
                      </p>
                      <p className="font-medium text-[#ffffff] text-[22px]">
                        {info.value}
                      </p>
                    </div>
                  ))}               
                </div>
              </div>
            </div>

            <div className="mb-8">
              {campusLocations.map((location, index) => (
                <p
                  key={index}
                  className="font-light text-[#fffefed9] text-[22px]"
                >
                  {location}
                </p>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex-1" />
              <div className="flex gap-4 invert brightness-[100%] contrast-[2]">
                <img
                  className="w-[35px] h-[35px]"
                  alt="Facebook"
                  src="public/facebook.svg"
                />
                <img
                  className="w-[35px] h-[35px]"
                  alt="Youtube"
                  src="public/youtube.svg"
                />
              </div>
            </div>

            <Separator className="w-full h-px bg-white my-6" />

            <div className="text-center">
              <p className="font-light text-[#fffefe] text-xl">
                © Bản quyền 2014. Trường Đại học Giao thông vận tải TP. HCM.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

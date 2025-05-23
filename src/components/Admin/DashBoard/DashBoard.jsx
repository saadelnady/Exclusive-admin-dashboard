import React from "react";

const AdminDashboard = () => {
  const stats = [
    { label: "المستخدمين", value: "1,245" },
    { label: "البائعين", value: "320" },
    { label: "المنتجات", value: "4,580" },
    { label: "الطلبات", value: "2,340" },
  ];

  const notifications = [
    "طلب جديد بانتظار الموافقة",
    "تحديث بيانات البلغ رقم #234",
    "انتهاء صلاحية ترخيص النظام بعد أيام",
  ];

  const activities = [
    "تمت إضافة منتج جديد: ساعات بايوت",
    "تم قبول طلب #12867",
    "مستخدم جديد سجل حسابه",
  ];

  return (
    <div className="container py-5 text-end">
      <h1 className="mb-4 fw-bold">لوحة التحكم - Admin / Super Admin</h1>

      {/* Cards for stats */}
      <div className="row g-4 mb-4">
        {stats.map((stat, index) => (
          <div className="col-md-3" key={index}>
            <div className="card text-center">
              <div className="card-body">
                <h4 className="card-title">{stat.value}</h4>
                <p className="card-text text-muted">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts + Notifications */}
      <div className="row g-4 mb-4">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header fw-semibold">مبيعات الشهر الحالي</div>
            <div className="card-body text-muted text-center">
              [رسم بياني Placeholder]
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header fw-semibold">الإشعارات</div>
            <ul className="list-group list-group-flush">
              {notifications.map((note, index) => (
                <li className="list-group-item text-muted" key={index}>
                  🔵 {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="card">
        <div className="card-header fw-semibold">الأنشطة الأخيرة</div>
        <ul className="list-group list-group-flush">
          {activities.map((act, index) => (
            <li className="list-group-item text-muted" key={index}>
              🔸 {act}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;

namespace WebBanHangOnline.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UpdateSub : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.tb_Sub", "Email", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.tb_Sub", "Email", c => c.String());
        }
    }
}

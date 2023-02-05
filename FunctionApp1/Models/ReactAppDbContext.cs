using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace FunctionApp.Models
{
    public partial class ReactAppDbContext : DbContext
    {
        public ReactAppDbContext()
        {
        }

        public ReactAppDbContext(DbContextOptions<ReactAppDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ContactUs> ContactUs { get; set; }
        public virtual DbSet<Game> Games { get; set; }
        public virtual DbSet<Movie> Movies { get; set; }
        public virtual DbSet<Rating> Ratings { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                string connectionString = Environment.GetEnvironmentVariable("SqlConnectionStringForReactAppAzureFunctions");
                optionsBuilder.UseSqlServer(connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ContactUs>(entity =>
            {
                //entity.HasNoKey();

                entity.ToTable("contact_us");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.Message)
                    .IsRequired()
                    .HasMaxLength(500)
                    .HasColumnName("message");

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("user_name");
            });

            modelBuilder.Entity<Game>(entity =>
            {
                entity.ToTable("games");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.GameName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("game_name");

                entity.Property(e => e.RatingId).HasColumnName("rating_id");

                entity.Property(e => e.Year).HasColumnName("year");

                entity.HasOne(d => d.Rating)
                    .WithMany(p => p.Games)
                    .HasForeignKey(d => d.RatingId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_games_ratings");
            });

            modelBuilder.Entity<Movie>(entity =>
            {
                entity.ToTable("movies");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.MovieName)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("movie_name");

                entity.Property(e => e.RatingId).HasColumnName("rating_id");

                entity.Property(e => e.Year).HasColumnName("year");

                entity.HasOne(d => d.Rating)
                    .WithMany(p => p.Movies)
                    .HasForeignKey(d => d.RatingId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_movies_ratings");
            });

            modelBuilder.Entity<Rating>(entity =>
            {
                entity.ToTable("ratings");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.RatingTitle)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("rating_title");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
